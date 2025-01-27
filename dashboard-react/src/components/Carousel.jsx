import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  gap: 16px;
  padding: 16px;
  background-color: #1c1c1c;
  border-radius: 8px;

  scrollbar-width: thin;
  scrollbar-color: #6c63ff transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #6c63ff;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  scroll-behavior: smooth;
`;

const CarouselItem = styled.div`
  background-color: black;
  color: white;
  border-radius: 8px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: grab;
  box-shadow: 0 4px 6px white;
  font-size: 1.2rem;
  font-weight: bold;

  &:active {
    cursor: grabbing;
  }

  &:hover {
    background-color:gray;
    transition: background-color 0.9s;
  }
`;

const SortableItem = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <CarouselItem ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </CarouselItem>
  );
};

// Componente principal do carrossel
const Carousel = () => {
  const [items, setItems] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]); // IDs dos itens do carrossel

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.indexOf(active.id);
        const newIndex = prevItems.indexOf(over.id);
        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items}>
        <CarouselContainer>
          {items.map((id) => (
            <SortableItem key={id} id={id} />
          ))}
        </CarouselContainer>
      </SortableContext>
    </DndContext>
  );
};

export default Carousel;
