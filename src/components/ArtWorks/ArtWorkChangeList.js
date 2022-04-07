import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Icon } from "../../elements";

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
    background: isDragging ? "#E5E7EB" : "white",
    ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "#E5E7EB" : "white",
    padding: grid,
});

function ArtWorkChangeList(props) {
    const { list, setPreviews, setDeleteList, isEdit } = props;
    // console.log(list);
    const getItems = (count) =>
        Array.from({ length: count }, (v, k) => k).map((k) => ({
            id: `item-${k}`,
            content: list[k],
        }));

    const [items, setItems] = useState(getItems(list.length));
    const [forceRerender, setForceRerender] = useState(true);
    React.useEffect(() => {
        setItems(getItems(list.length));
    }, [list]);
    // id를 가진 array centent만 보내기!!

    const trashOnClick = (idx, item) => {
        // console.log(isEdit, item);
        var tempItems = items;
        tempItems.splice(idx, 1);
        setItems(tempItems);
        const forParent = [];
        for (var i of items) {
            forParent.push(i.content);
        }
        if(isEdit){
            setDeleteList((temp) => [...temp, {"img_url":item.content}]);
        }
        setPreviews(forParent);
        setForceRerender(!forceRerender);
    };

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
                                        className="flex items-center justify-center"
                                    >
                                        <img
                                            src={item.content}
                                            className="object-cover object-center overflow-hidden"
                                        />

                                        <div className="p-4 mt-auto -ml-12 text-dpurple-200">
                                            <Icon
                                                onClick={(event) => {
                                                    trashOnClick(idx, item);
                                                }}
                                                name="Delete"
                                            />
                                        </div>
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
