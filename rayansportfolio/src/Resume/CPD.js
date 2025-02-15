import React, { useState, useRef, useEffect } from "react";
import "./CPD.css";

export default function CPD() {
    const [cpdData] = useState({
        SheCodes: { description: "SheCodes is a platform for women to learn coding in an online environment. It focuses on empowering women through technical skills.", date: "October 2024" },
        "Iungo Solutions": { description: "Iungo Solutions provides IT consulting and software development services, helping businesses achieve digital transformation.", date: "November 2024" },
        "Digital Marketing Institute": { description: "The Digital Marketing Institute offers professional digital marketing courses aimed at improving marketing skills in the digital age.", date: "September 2024" },
        "Trailblazer Programme": { description: "The Trailblazer Programme is a leadership and mentoring initiative to help individuals develop their careers in various industries.", date: "December 2024" }
    });

    const [selectedItem, setSelectedItem] = useState(null);

    const cardRef = useRef(null);
    const cpdRef = useRef(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target) && !cpdRef.current.contains(event.target)) {
                setSelectedItem(null); 
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <h4 className="cpd-title">CPD</h4>
            <div className="cpds" ref={cpdRef}>
                <p onClick={() => handleItemClick("SheCodes")}>SheCodes</p>
                <p onClick={() => handleItemClick("Iungo Solutions")}>Iungo Solutions</p>
                <p onClick={() => handleItemClick("Digital Marketing Institute")}>Digital Marketing Institute</p>
                <p onClick={() => handleItemClick("Trailblazer Programme")}>Trailblazer Programme</p>
            </div>

            {selectedItem && (
                <div className={`cpd-card ${selectedItem ? 'show' : ''}`} ref={cardRef}>
                    <h5>{selectedItem}</h5>
                    <small>{cpdData[selectedItem].date}</small>
                    <p>{cpdData[selectedItem].description}</p>
                </div>
            )}
        </div>
    );
}
