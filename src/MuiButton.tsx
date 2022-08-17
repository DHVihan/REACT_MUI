import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MuiButton = () => {
	return (
		<Stack spacing={4}>
			<Stack spacing={2} direction="row">
				<Button variant="text" href="https://google.com">
					Text
				</Button>
				<Button variant="contained" href="https://youtube.com">
					Contained
				</Button>
				<Button variant="outlined">Outlined</Button>
			</Stack>

			<Stack spacing={2} direction="row">
				<Button variant="text" href="https://google.com" color="primary">
					Primary
				</Button>
				<Button variant="contained" href="https://google.com" color="secondary">
					Secondary
				</Button>
				<Button variant="outlined" href="https://google.com" color="error">
					error
				</Button>
				<Button variant="contained" href="https://google.com" color="warning">
					Warning
				</Button>
				<Button variant="contained" href="https://google.com" color="info">
					Info
				</Button>
				<Button variant="contained" href="https://google.com" color="success">
					Success
				</Button>
			</Stack>

			<Stack display="block" spacing={2} direction="row">
				<Button variant="contained" href="https://google.com" size="small">
					Small
				</Button>
				<Button variant="contained" href="https://google.com" size="medium">
					Medium
				</Button>
				<Button variant="contained" href="https://google.com" size="large">
					Large
				</Button>
			</Stack>

			<Stack spacing={2} direction="row">
				<Button variant="contained" startIcon={<SendIcon />}>
					Send
				</Button>
				<Button variant="contained" endIcon={<SendIcon />}>
					Send
				</Button>
				<IconButton area-aria-label="send" color="success" size="medium" onClick={() => alert("Clicked")}>
					<SendIcon />
				</IconButton>
			</Stack>
		</Stack>
	);
};
