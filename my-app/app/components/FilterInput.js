"use client";

const FilterInputs = ({ value, onChange }) => {
    return(
        <div
        type="text"
        placeholder="Filtre a partir do nome, email ou telefone"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
    );
};
