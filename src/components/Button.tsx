import { cva } from "class-variance-authority";
type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "success" | "outline-white" | "outline-gray";
};

const Button = ({ variant, ...props }: ButtonProps) => {
  return <button {...props} className={buttonVariants({ variant })} />;
};

const buttonVariants = cva("px-3 py-1 rounded-md text-sm", {
  variants: {
    variant: {
      primary: "bg-blue-600 text-white hover:bg-blue-700 transition",
      secondary: "bg-yellow-700 text-black",
      success: "bg-green-700 text-white hover:opacity-90",
      "outline-white": "border border-black text-black hover:bg-black hover:text-white hover:transition",
      "outline-gray": "border border-gray-300 hover:border-black transition text-gray-500 py-2 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default Button;
