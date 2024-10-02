import { IconButton, Stack } from "@mui/material"

const SocialNetworksComponent = () => {
  return (
    <Stack direction="row" alignItems="center" gap={0.1}>
      <IconButton href="https://www.facebook.com/">
        <img 
          prefix="https://www.facebook.com/" 
          alt="Facebook" 
          src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/facebook@2x.png" 
          title="Facebook"
          width="auto" 
          height="32px"
        />
      </IconButton>
      <IconButton href="https://twitter.com/">
        <img 
          prefix="https://twitter.com/" 
          alt="X" 
          src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/twitter@2x.png" 
          title="X" 
          width="auto" 
          height="32px"
        />
      </IconButton>
      <IconButton href="https://instagram.com/">
        <img 
          prefix="https://instagram.com/" 
          alt="Instagram" 
          src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/instagram@2x.png" 
          title="Instagram"
          width="auto"
          height="32px"
        />
      </IconButton>
      <IconButton  href="https://www.linkedin.com/">
        <img
          prefix="https://www.linkedin.com/"
          alt="LinkedIn"
          src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/linkedin@2x.png"
          title="LinkedIn"
          width="auto"
          height="32px"
        />
      </IconButton>
    </Stack>
  )
}

export default SocialNetworksComponent