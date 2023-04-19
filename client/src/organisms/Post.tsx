import { Box, Typography } from "@mui/material";
import { Body } from "../molecules/Body";
import { Title } from "../atoms/Title";

type PostProps = {
    isFeed: boolean;
};

export const Post = ({ isFeed }: PostProps) => {
    return (
        <div
            style={{
                maxWidth: 700,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                paddingRight: 42,
                marginBottom: 42,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    maxWidth: 700,

                    flexDirection: "column",
                    display: "flex",
                }}
            >
                <Title />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#ccd6f6", maxWidth: 700, fontSize: 18 }}
                >
                    {Date(Date.now())}
                </Typography>
                <div style={{ marginTop: 12, marginBottom: 12 }}>
                    <img
                        style={{ height: 300, width: "100%", maxWidth: 700 }}
                        src={"code.jpeg"}
                    />
                </div>
                <Body isFeed={isFeed} />
            </Box>
        </div>
    );
};
