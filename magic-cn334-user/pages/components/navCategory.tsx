import React, { useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";

export const NavCategory = () => {
    const [selectedElement, setSelectedElement] = useState<any>("");
    const [selectedCategory, setSelectedCategory] = useState<any>("");
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

    console.log(selectedElement, "selectedElement")
    console.log(selectedCategory , "selectedCategory")

    return (
        <div>

            <ListboxWrapper>
            <label>Element</label>
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
            </ListboxWrapper>
            <ListboxWrapper>
                <label>Category</label>
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
            </ListboxWrapper>
        </div>
    );
}
