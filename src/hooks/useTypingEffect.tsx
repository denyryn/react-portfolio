import { useState, useEffect } from "react";

const useTypingEffect = (
  roles: string[],
  typingSpeed = 150,
  delayBetweenRoles = 1000
) => {
  const [displayedRole, setDisplayedRole] = useState<string>("");
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    if (roles.length === 0) return;

    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      const nextCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;

      if (!isDeleting && nextCharIndex === currentRole.length + 1) {
        setTimeout(() => setIsDeleting(true), delayBetweenRoles);
      } else if (isDeleting && nextCharIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }

      setCharIndex(nextCharIndex);
      setDisplayedRole(currentRole.substring(0, nextCharIndex));
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, roleIndex, roles, typingSpeed, delayBetweenRoles]);

  return displayedRole;
};

export default useTypingEffect;
