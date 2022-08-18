import { Stack, Button, IconButton, ToggleButtonGroup, ToggleButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

export const MuiButton = () => {
	const [formats, setFormats] = useState<string[]>([]);
	console.log({ formats });
	const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
		setFormats(updatedFormats);
	};
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
			<Stack>
				<ToggleButtonGroup aria-aria-label="text formatting" value={formats} onChange={handleFormatChange}>
					<ToggleButton value="bold">
						<FormatBoldIcon />
					</ToggleButton>
					<ToggleButton value="italic">
						<FormatItalicIcon />
					</ToggleButton>
					<ToggleButton value="underlined">
						<FormatUnderlinedIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</Stack>
	);
};
