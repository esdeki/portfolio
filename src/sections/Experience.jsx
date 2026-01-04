const experiences = [
  {
    period: "1403 — Present",
    role: "تحلیلگر داده",
    company: "فریلنسر",
    description:
      "تحلیلگر داده با پیش‌زمینه بانکداری و تجربه عملی در حوزه ارزی؛ ترکیبی از فهم مالی، تفکر تحلیلی و تصمیم‌سازی مبتنی بر داده",
    technologies: ["Python", "Pandas", "Numpy", "SQL",'Power BI','Matplolib','React'],
    current: true,
  },
  {
    period: "1403",
    role:"کارشناس تسهیلات ارزی" ,
    company: "بانک خاورمیانه",
    description:
      "بررسی درخواست متقاضیان تسهیلات ارزی و مطابقت با بخش چهارم مجموعه مقررات ارزی، اعطای و تسویه تسهیلات (صدور اسناد مربوطه ) در سه بخش منابع بانک، تسهیلات صندوق توسعه ملی و نیز ریفایننس 5 ماهه بانک مرکزی، انجام فرایندهای خرید ارز به منظور تسویه تسهیلات، بررسی گزارش های سامانه هایی از قبیل صندوق توسعه ملی برای بروزرسانی آخرین وضعیت تسهلات، ایجاد پایگاه داده برای ثبت و نگهداری و بروزرسانی تسهیلات ارزی، تهیه گزارش های مورد نیاز جهت مدیریت سازمان",
    technologies: ["OFFICE, سامانه های بانک مرکزی"],
    current: false,
  },
  {
    period: " 1394  — 1403",
    role: "کارشناس ارزی",
    company: "صرافی و بانک توسعه تعاون",
    description:
      "همکاری در معاونت عملیات ارزی (دایره اعتبارات اسنادی): انجام کلیه امور مربوط به اعتبارات اسنادی (شامل صدور، اصلاح LC و بررسی اسناد...)، آشنایی با انواع پیام های SWIFT، تهیه گزارش به همراه  تجزیه و تحلیل وضعیت تعهدات و رفع تعهدات ارزی متقاضیان، فعالیت به عنوان نماینده اداره در ارتباط با گواهی نامه ایزو  .انجام کلیه امور مرتبط با حوالجات آزاد ارزی (ارز متقاضی و غیر دولتی) ار قبیل خرید و کارگزاری ارز آزاد و دریافت تائیدیه واریز وجه به حساب مشتری به همراه صدور اسناد حسابداری خرید و فروش ارز (نرم افزار حسابداری پیوست) و انجام فعالیت های مرتبط با ریاست دفتر مدیرعامل صرافی",
    technologies: ["OFFICE, سامانه های بانک مرکزی"],
    current: false,
  },
  {
    period: "1391 — 1393",
    role: "کمک حسابدار ",
    company: "شرکت مهندسی زمین صنعت خاتم-تعاونی اندیشه پرداز ماد",
    description:
      "همکاری در بخش حسابداری و مالی (استفاده از نرم افزار حسابداری رافع)، نظارت بر سررسید اسناد مالی تعهد آور، دریافت تقاضای مشتریان و هماهنگی با بخش های انبار و تولید، صدور اسناد حسابداری و بایگانی آن .",
    technologies: ["نرم افزار حسابداری رافع"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" dir="rtl" className="py-32 relative overflow-hidden text-right">
      <div
        className="absolute top-1/2 right-1/4 w-96
       h-96 bg-(--color-primary)/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - تغییر تراز به سمت چپ تصویر */}
        <div className="max-w-3xl mb-16 mr-auto ml-0 text-left" dir="ltr">
          <span
            className="text-(--color-secondary-foreground) text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-(--color-secondary-foreground)"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground text-lg
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional journey, from a curious beginner to someone who turns data into insight
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* خط تایم‌لاین */}
          <div className="timeline-glow absolute right-0 md:right-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12 px-4 md:px-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute right-0 md:right-1/2 top-0 w-3.5 h-3.5 bg-primary rounded-full translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pr-10 md:pr-0 ${
                    idx % 2 === 0
                      ? "md:pl-16 md:text-left" 
                      : "md:col-start-2 md:pr-16 text-right"
                  }`}
                >
                  <div
                    className={`glass p-8 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 text-right`}
                  >
                    <span className="text-base text-primary font-medium block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 text-white">{exp.role}</h3>
                    <p className="text-muted-foreground text-lg">{exp.company}</p>
                    
                    <p className="text-base md:text-[1.1rem] text-muted-foreground mt-4 leading-relaxed font-normal">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6 justify-start">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-4 py-1.5 bg-surface text-xs md:text-sm rounded-full text-muted-foreground border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};