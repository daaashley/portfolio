import { Typography } from "@mui/material"

interface TitleProps {
    title: string
}

export const Title = ({ title }: TitleProps) => {
    return (
        <Typography
            variant="h4"
            component="div"
            sx={{ color: "#ccd6f6", maxWidth: 700 }}
        >
            {title}
        </Typography>
    )
}
