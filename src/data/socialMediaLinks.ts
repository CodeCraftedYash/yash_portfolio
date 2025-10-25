import type { socialMediaLinksType } from "../types/socialMediaLinksType";
import { FaGithub, IoMdMail, FaLinkedin, FaInstagram } from "../utils/icons/socialMediaIcons";

export const socialMediaLinks:socialMediaLinksType[] = [
    { name: 'GitHub', url: 'https://github.com/CodeCraftedYash', icon: FaGithub, col:"rgb(38, 39, 38)" },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yash-mishra1000/', icon:  FaLinkedin, col:"rgb(9, 89, 170)" },
    { name: 'Email', url: 'yash1000mishra@gmail.com', icon: IoMdMail, col:"rgb(120, 3, 3)" },
    { name: 'Instagram', url: 'https://www.instagram.com/yash_coding/', icon: FaInstagram, col:"rgb(226, 0, 143)" },
]