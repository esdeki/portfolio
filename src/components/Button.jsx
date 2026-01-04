export const Button = ({ className ="",size='default', children }) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium  focus: outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) bg-(--color-primary) text-(--color-primary-foreground) hover:bg-(--color-primary)/90 shadow-lg shadow-(--color-primary)/23 px-4 py-2 rounded-lg";  // اضافه کردن استایل پایه
   
   const sizeclasses ={
    sm:"px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
   };
    const classes = `${baseClasses} ${className} ${sizeclasses[size]}`; // ترکیب با کلاس‌های ورودی

    return (
        <button className={classes}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};
