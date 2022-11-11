import { useState, useEffect } from "react";

export const usePasswordValidation = ({ firstPassword = "", confirmPassword = "" }) => {

    const [validLength, setValidLength] = useState(null);
    const [hasNumber, setHasNumber] = useState(null);
    const [hasLetter, setHasLetter] = useState(null);
    const [specialChar, setSpecialChar] = useState(null);
    const [match, setMatch] = useState(null);

    useEffect(() => {
        setValidLength(firstPassword.length >= 8 ? true : false);
        setHasNumber(/\d/.test(firstPassword));
        setHasLetter(/[a-zA-Z]/.test(firstPassword));
        setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));

        if ((firstPassword && firstPassword === confirmPassword) && firstPassword.length > 0) {
            setMatch(true)
        } else if (firstPassword.length < 1) {
            setMatch(null)
        } else {
            setMatch(false)
        }
    }, [firstPassword, confirmPassword]);
    
    return [validLength, hasNumber, hasLetter, match, specialChar];
}

