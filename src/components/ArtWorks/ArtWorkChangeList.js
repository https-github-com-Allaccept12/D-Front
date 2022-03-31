import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 1;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? "#752BD9" : "white",
    ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "#752BD9" : "white",
    padding: grid,
});

function ArtWorkChangeList(props) {
    const { list } = props;
    const getItems = (count) =>
        Array.from({ length: count }, (v, k) => k).map((k) => ({
            id: `item-${k}`,
            content: list[k],
        }));

    const [items, setItems] = useState(getItems(list.length));
    React.useEffect(() => {
        setItems(getItems(list.length));
    }, [list]);
    // id를 가진 array centent만 보내기!!
    console.log(items);

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const reorderedItems = reorder(items, result.source.index, result.destination.index);

        setItems(reorderedItems);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={"droppable"}>
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                        className="w-full"
                    >
                        {items.map((item, idx) => (
                            <Draggable key={item.id} draggableId={item.id} index={idx}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                        className="flex justify-center items-center"
                                    >
                                        <img src={item.content} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
export default ArtWorkChangeList;
