import React, { use, useEffect, useState } from "react";
import { Divider, Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import { Typography } from "@mui/material";

export const NavCategory = ({ setCategory , setElement } : {setCategory : any , setElement : any}) => {
    const [selectedElement, setSelectedElement] = useState<any>("");
    const [selectedCategory, setSelectedCategory] = useState<any>("");

    // useEffect(() => {
    //     setCategory(selectedCategory);
    //     setElement(selectedElement);
    // }, [selectedElement, selectedCategory]);

    const Element = [
        {
            key: "ดิน",
            label: "ดิน",
        },
        {
            key: "น้ำ",
            label: "น้ำ",
        },
        {
            key: "ชีวิต",
            label: "ชีวิต",
        },
        {
            key: "ลม",
            label: "ลม",
        }
    ];
    const Category = [
        {
            key: "หนังสือ",
            label: "หนังสือ",
        },
        {
            key: "โพชั่น",
            label: "โพชั่น",
        },
        {
            key: "ไม้กวาด",
            label: "ไม้กวาด",
        },
        {
            key: "วงเวท",
            label: "ไม้กวาด",
        }
    ];

    return (
        <div>
            <ListboxWrapper>
                <div className="p-4">
                    <Typography variant="h5">Element</Typography>
                    <Listbox
                        items={Element}
                        aria-label="Dynamic Actions"
                        onAction={(key) => setSelectedElement(key)}
                    >
                        {(item) => (
                            <ListboxItem
                                key={item.key}
                                color="default"
                            >
                                {item.label}
                            </ListboxItem>
                        )}
                    </Listbox>
                </div>
            </ListboxWrapper>
            <br />

            <ListboxWrapper>
                <div className="p-4">
                    <Typography variant="h5">Category</Typography>
                    <Listbox
                        items={Category}
                        aria-label="Dynamic Actions"
                        onAction={(key) => setSelectedCategory(key)}
                    >
                        {(item) => (
                            <ListboxItem
                                key={item.key}
                                color="default"
                            >
                                {item.label}
                            </ListboxItem>
                        )}
                    </Listbox>
                </div>
            </ListboxWrapper>
        </div>
    );
}
