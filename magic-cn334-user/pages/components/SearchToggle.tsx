import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

interface SearchToggleProps {
    productDict: { [key: string]: number };
}

export const SearchToggle: React.FC<SearchToggleProps> = ({ productDict }) => {
    const [dict, setDict] = useState(productDict);
    const router = useRouter()

    useEffect(() => {
        setDict(productDict);
    }, [productDict]);

    const handleClick = (value:number) => {
        router.push(`/Product-detail/${value}`);
    };

    return (
        <ul className="overflow-auto h-[26vh] absolute top-0">
            {Object.entries(dict).map(([key, value]) => (
                <li 
                    className='p-2 bg-white cursor-pointer'
                    key={key} 
                    onClick={() => handleClick(value)}>
                    {key}
                </li>
            ))}
        </ul>
    );
};
