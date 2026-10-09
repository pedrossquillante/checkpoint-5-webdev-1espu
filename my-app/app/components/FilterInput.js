"use client";

const FilterInputs = ({ value, onChange }) => {
    return(
        <div
        type="text"
        placeholder="Filtre a partir do nome ou email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
    );
};
