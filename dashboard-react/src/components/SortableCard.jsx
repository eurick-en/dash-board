import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.size === "small"
      ? "#6c63ff"
      : props.size === "medium"
      ? "#34c759"
      : "#ff3b30"};
  color: white;
  border-radius: 8px;
  width: 100%;
  height: ${(props) =>
    props.size === "small" ? "100px" : props.size === "medium" ? "150px" : "200px"};
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px;
  cursor: grab;
  position: relative;

  &:active {
    cursor: grabbing;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(72, 30, 223, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 6px;
  font-size: 12px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: darkred;
  }
`;

const CardContainer = styled.div`
  position: relative;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const SortableCard = ({ id, size, onRemove }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <CardContainer>
      <RemoveButton onClick={() => onRemove(id)}>X</RemoveButton>
      <StyledCard
        ref={setNodeRef}
        style={style}
        size={size}
        {...attributes}
        {...listeners}
      >
        <p>{id}</p>
      </StyledCard>
    </CardContainer>
  );
};

export default SortableCard;
