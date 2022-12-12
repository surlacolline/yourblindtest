import React from 'react';
import './spotify-button.scss';
import spotifyLogo from "./../assets/spotify.png";

interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SpotifyButton = ({
  size = 'medium',
  label = 'Connexion',
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['spotify-button', `spotify-button--${size}`].join(' ')}
      {...props}
    >
      {label}
      <img className={"spotify-button_logo"} src={spotifyLogo} alt="" />
    </button>
  );
};
