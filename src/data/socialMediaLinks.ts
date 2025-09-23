import type { socialMediaLinksType } from "../types/socialMediaLinksType";
import { FaGithub, IoMdMail, FaLinkedin } from "../utils/icons/socialMediaIcons";

export const socialMediaLinks:socialMediaLinksType[] = [
    { name: 'GitHub', url: 'https://github.com/CodeCraftedYash', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yash-mishra1000/', icon:  FaLinkedin },
    { name: 'Email', url: 'yash1000mishra@gmail.com', icon: IoMdMail },
]