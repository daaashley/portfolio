import { Box, Typography } from "@mui/material"






export const Sidebar = () => {

    return (
        <div
            style={{
                maxWidth: 240,
                display: "flex",
                flexDirection: "column",
                borderLeft: "1px solid rgba(204,214,246, 0.3)",

                paddingLeft: 42,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    maxWidth: 240,
                    height: 800,
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#ccd6f6" }}
                >
                    viibeeng
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ color: "#ccd6f6" }}
                >
                    February 2023
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ color: "#ccd6f6" }}
                >
                    March 2023
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ color: "#ccd6f6" }}
                >
                    April 2023
                </Typography>
            </Box>
        </div>
    )
}
