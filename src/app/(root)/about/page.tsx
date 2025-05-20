"use client";
import { useTheme } from "@/contexts/ThemeContext"
import DetailPage from "./_detail/page"



const Aboutpage = () => {
  const theme = useTheme();
  return (
    <div>
      <h1 style={{color: theme.colors.secondary, background: theme.colors.primary}}>About Page</h1>
      <DetailPage/>
    </div>
  )
}

export default Aboutpage