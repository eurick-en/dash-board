import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import SortableCard from "./SortableCard";
import Carousel from "./Carousel";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: grid;
  width: 100vw;
  min-height: calc(100vh - 120px);
  gap: 16px;
  padding: 16px;
  box-sizing: border-box;
  margin: 0 auto;

  grid-template-columns: repeat(1, 1fr); 
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 16px 24px;
  color: white;
  box-shadow: 0 4px 6px white;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const CarouselWrapper = styled.div`
  background-color: black;
  padding: 16px;
  box-shadow: 0 -4px 6px white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;  // Agora o carrossel ficará acima do botão
`;


const Dashboard = () => {
  const [cards, setCards] = useState([
    { id: "card-1", size: "small" },
    { id: "card-2", size: "medium" },
    { id: "card-3", size: "large" },
  ]);

  const addCard = () => {
    const sizes = ["small", "medium", "large"];
    const newCard = {
      id: `card-${cards.length + 1}`,
      size: sizes[Math.floor(Math.random() * sizes.length)],
    };
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const removeCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const oldIndex = cards.findIndex((card) => card.id === active.id);
    const newIndex = cards.findIndex((card) => card.id === over.id);
    setCards(arrayMove(cards, oldIndex, newIndex));
  };

  return (
    <PageContainer>
      <Header>
        <Title>Dashboard Interativo</Title>
        <AddButton onClick={addCard}>Adicionar Card</AddButton>
      </Header>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={cards.map((card) => card.id)} strategy={rectSortingStrategy}>
          <DashboardContainer>
            {cards.map((card) => (
              <SortableCard key={card.id} id={card.id} size={card.size} onRemove={removeCard} />
            ))}
          </DashboardContainer>
        </SortableContext>
      </DndContext>
      <CarouselWrapper>
        <Carousel />
      </CarouselWrapper>
    </PageContainer>
  );
};

export default Dashboard;
