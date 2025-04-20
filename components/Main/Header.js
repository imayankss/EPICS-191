import React from 'react';
import { useRouter } from 'next/router';
import { MdLogout } from 'react-icons/md';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

const Header = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleSignOut = () => {
        signOut();
        localStorage.removeItem('userDoc');
    };

    const headerMap = {
        "/": "Dashboard",
        "/foodnutrition": "Food & Nutrition",
        "/help": "Help",
        "/sleep": "Sleep",
        "/excercise": "Exercise & Yoga",
        "/mentalhealth": "Mental Health",
        "/Games": "Coginitive Games"
        
    };

    let imageUrl = session?.user?.image;

    // Validate the image URL; use googlelogo.png if OAuth image is missing
    if (!imageUrl || typeof imageUrl !== "string") {
        console.warn("OAuth image missing, using Google logo as fallback.");
        imageUrl = "/googlelogo.png"; // Fallback image
    }

    return (
        <div className="p-1 flex items-center">
            <h3 className="text-xl font-productSansBold">{headerMap[router.pathname]}</h3>
            <img 
                src={imageUrl} 
                className="ml-auto h-6 w-6 rounded-full object-cover" 
                alt="profile" 
                onError={(e) => {
                    console.error("Image failed to load:", e.target.src);
                    e.target.src = "/googlelogo.png"; // Fallback if loading fails
                }}
            />
            <MdLogout onClick={handleSignOut} className="text-xl cursor-pointer ml-3" />
        </div>
    );
};

export default Header;
