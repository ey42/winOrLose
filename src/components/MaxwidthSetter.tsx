import { cn } from "@/lib/utils"

interface MaxWidthSetterProps{
    className?: string
    children: React.ReactNode
}


const MaxwidthSetter = ({className, children}: MaxWidthSetterProps) => {
  return (
    <div className={cn("max-w-screen-xl w-full mx-auto ", className)}>
        {children}
    </div>
  )
}

export default MaxwidthSetter