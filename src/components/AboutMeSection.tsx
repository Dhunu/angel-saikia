
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'
import Container from './ui/container'

const AboutMeSection = () => {
  return (
    <Container className="flex flex-wrap-reverse justify-between pt-20" id='about'>
            <div className="w-full xl:w-auto flex justify-center">
                <img
                    src="/assets/images/about.png"
                    width={700}
                    height={700}
                    alt="about-image"
                    className="object-contain rounded-3xl -scale-x-100 hover:-scale-x-105 duration-300 transition-transform"
                />
            </div>
            <div className="flex w-full xl:w-[500px] px-5 xl:px-0 justify-center items-center xl:items-start flex-col pt-10 xl:pr-16 mb-10">
                <h1 className="font-extrabold text-3xl sm:text-5xl mb-10 font-serif">
                    About Me
                </h1>
                <p className="text-white text-xl font-serif">
                    I am a full stack web developer with a passion for creating
                    interactive and responsive web applications. I have
                    experience working with JavaScript, React, Tailwind,
                    AppWrite, MySQL, Java, Spring, HTML, CSS, and Git. I am a
                    quick learner and I am always looking to expand my knowledge
                    and skill set. I am a team player and I am excited to work
                    with others to create amazing applications.
                </p>
                <div className="mt-10 flex flex-row w-full">
                    <Tabs defaultValue="skill" className="text-sm">
                        <TabsList>
                            <TabsTrigger className="font-normal p-1 sm:p-2" value="skill">Skills</TabsTrigger>
                            <TabsTrigger className="font-normal p-1 sm:p-2" value="edu">Education</TabsTrigger>
                            <TabsTrigger className="font-normal p-1 sm:p-2" value="certi">Certifications</TabsTrigger>
                        </TabsList>
                        <TabsContent value="skill">
                            <ul className="flex flex-wrap gap-2 w-full xl:w-[400px]">
                                <li>React</li>|<li>Java</li>|<li>MySQL</li>|
                                <li>Spring</li>|<li>Tailwind</li>|
                                <li>Shadcn UI</li>|<li>NextJS</li>
                            </ul>
                        </TabsContent>
                        <TabsContent value="edu">
                            <ol className=" flex flex-col gap-2 list-disc">
                                <li>Data Science and Apllications, IITM</li>
                                <li>
                                    Full Stack Web Development, Masai School
                                </li>
                                <li>Computer Science and Education, NITS</li>
                                <li>Science, Ramanujan Junior College</li>
                            </ol>
                        </TabsContent>
                        <TabsContent value="certi">
                            <ol className="flex flex-col gap-2 list-disc">
                                <li>What is Data Science? | IBM</li>
                                <li>Tools of Data Science? | IBM</li>
                            </ol>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </Container>
  )
}

export default AboutMeSection