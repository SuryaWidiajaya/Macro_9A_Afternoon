// ParentComponent.js
import React, { useState } from 'react';
import OptionInput from './OptionInput'; // Sesuaikan dengan path yang sesuai

function ParentComponent() {
    const [image, setImage] = useState(null);

    const handleImageChange = (newImage) => {
        setImage(newImage);
    };

    const handleRemoveImage = () => {
        setImage(null);
    };

    return (
        <div>
            <OptionInput image={image} onImageChange={handleImageChange} onRemove={handleRemoveImage} />
        </div>
    );
}

export default ParentComponent;
