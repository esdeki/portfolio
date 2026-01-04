import {Code2, Rocket, Users,Lightbulb} from'lucide-react';

const highlights =[
    {
        icon: Code2,
        title:'Financial Data Modeling',
        description:"Leveraging 11 years of banking expertise to build predictive models that decode complex market trends, currency fluctuations, and risk assessment."
    },

    {
        icon: Rocket,
        title:'Strategic Decision Support',
        description:"Translating raw financial and economic data into actionable business intelligence to drive growth and operational efficiency in volatile markets."
    },

    {
        icon: Users,
        title:'Socio-Economic Insights',
        description:"Analyzing the intersection of social-political shifts and economic data to provide a holistic view of market behavior and emerging opportunities."
    },

    {
        icon: Lightbulb,
        title:'Data-Driven Reporting',
        description:"Crafting compelling data stories using Python and React-based dashboards to communicate complex findings to stakeholders with clarity and precision."
    },
];

export const About = () => {
    return <section  id='about' className='py-32 relative overflow-hidden'>
        <div className='container mx-auto px-6 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-16 items-center'>
{/* LEFT COLUMN*/}
                <div className='space-y-8 '> 
                    <div className='animate-fade-in'>
                    <span className='text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase'>
                        About Me
                    </span>
                    </div>
                
                <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-(--color-secondary-foreground)'>
                Transforming data into insights,
                <br/>
                <span className='font-serif italic font-normal text-white'>
                      a step toward real-world decisions. 
                     </span>
                </h2> 
                <div className='space-y-4 text-(--color-muted-foreground) animate-fade-in animation-delay-200'>
                    <p>
                        I began my career in banking and the foreign exchange domain, and after 11 years of hands-on experience,
                         I chose to combine the depth of that expertise with modern data tools such as Python and SQL.
                          Working at the intersection of finance, trade, and real-world dynamics, my strength lies not
                           only in explaining what has happened, but in applying statistical analysis and Python libraries
                            to uncover patterns, generate insights and anticipate what comes next.
                    </p>

                </div> 

                <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 '>
                    <p className='text-lg font-medium italic text-(--color-foreground) '>
                        “Data is wealth. Organizations own it.
                         I help turn it into a lasting asset. 
                         Data means insight.”
                    </p>
                </div>
                </div> 

{/* LRIGHT COLUMN*/}
     <div className='grid sm:grid-cols-2 gap-6'>
    {highlights.map((item,idx) => 
    (
        <div key={idx} className='glass p-6 rounded-2xl animate-fade-in2' 
       /* style={{animationDelay:`${(idx+1)*100}ms`}}*/>
            <div className='w-12 h-12 rounded-xl bg-(--color-primary)/10 flex items-center justify-center mb-4 hover:bg-(--color-primary)/20'>
                <item.icon className='w-6 h-6 text-(--color-primary)'/>
            </div>
            <h3 className='text-lg font-semibold mb-2'>
                {item.title}
            </h3>
            <p className='text-sm text-(--color-muted-foreground)'>
                {item.description}
            </p>
        </div>
    )
    
    )}    
    </div>                   
            </div>
        </div>
    </section>
};