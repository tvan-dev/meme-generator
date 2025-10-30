import { useState, useEffect } from "react";

export default function Meme({ memeInfo }) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isImageError, setIsImageError] = useState(false);

    // Reset state khi urlImage thay đổi
    useEffect(() => {
        setIsImageLoaded(false);
        setIsImageError(false);
    }, [memeInfo.urlImage]);


    return (
        <div className="meme">
        <img
            src={memeInfo.urlImage}
            alt="meme-imgage"
            onError={() => setIsImageError(true)} // Nếu ảnh lỗi
            onLoad={() => setIsImageLoaded(true)} // Nếu ảnh load lại được
        />

        {/* Chỉ render text khi ảnh đã load thành công */}
        {isImageLoaded &&!isImageError && (
            <>
                <p className="text-top">{memeInfo.topText} </p>
                <p className="text-bot">{memeInfo.bottomText}</p>
            </>
        )}
        </div>
    );
}
