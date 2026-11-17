import { portfolioData } from "../data/portfolioData";
import { GitHubIcon, LinkedInIcon, UpworkIcon, FiverrIcon, MailIcon } from "./Icons";

const { socials, email } = portfolioData.personalInfo;

const socialItems = [
  { label: "GitHub", href: socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
  { label: "Upwork", href: socials.upwork, Icon: UpworkIcon },
  { label: "Fiverr", href: socials.fiverr, Icon: FiverrIcon },
  { label: "Email", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`, Icon: MailIcon },
];

export default function SocialLinks({ className }) {
  return (
    <div className={className}>
      {socialItems.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
