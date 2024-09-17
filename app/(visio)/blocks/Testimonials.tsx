import { Block } from "visio-cms-lib/types";
import Text from 'visio-cms-lib/Text'
import List from 'visio-cms-lib/List'
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
interface TestimonialsProps {
    title: string;
    description: string;
    pageBlockId?: string;
    testimonials: {
        name: string;
        message: string;
        star: number
    }[]
}
const Testimonials:Block<TestimonialsProps> = ({title, description, pageBlockId='', testimonials}) => {
    return (
        <div className="bg-dark-900 pt-48 pb-20 px-4 relative mb-[100px]">
           <Container>
           <h2 className="text-4xl font-satoshi max-w-xl mx-auto text-center  text-white text-satoshi mb-4 font-bold">
                <Text
                  propName="title"
                  pageBlockId={pageBlockId}
                  defaultValue={title}
                />
              </h2>
                <h4 className="font-satoshi text-sm font-light max-w-md  mx-auto text-slate-200 text-center mb-10">
                    <Text
                    propName="description"
                    pageBlockId={pageBlockId}
                    defaultValue={description}
                    />
                </h4>

             <List
             defaultPropValues={testimonials}
             propName="testimonials"
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                pageBlockId={pageBlockId}
                renderComponent={(testimonial, index) => (
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    key={testimonial.name} className="flex flex-col p-4 items-center space-y-8 rounded-xl border border-slate-300">
                        <div className="flex items-center justify-between w-full font-satoshi text-white ">
                            <TwitterLogoIcon fontSize={12} color="white"/>
                            <div className="flex gap-2 items-center">
                                <Star size={12} color="white" fill="white"/>
                                <p className="text-xs">
                                <Text propName={`testimonials.${index}.star`} pageBlockId={pageBlockId} defaultValue={`${testimonial.star}`}/>
                                </p>
                            </div>
                        </div>
                        <div className="text-white  font-satoshi text-center text-xs ">
                            <Text propName={`testimonials.${index}.message`} pageBlockId={pageBlockId} defaultValue={testimonial.message}/>
                        </div>
                        <div className="text-white  font-satoshi text-xs font-bold">
                                <Text propName={`testimonials.${index}.name`} pageBlockId={pageBlockId} defaultValue={testimonial.name}/>
                        </div>
                    </motion.div>
                )}  />
           </Container>
        </div>
    );
}

Testimonials.Schema = {
    name: "Testimonials",
    id: "Testimonials",
    sideEditingProps:[],
    defaultPropValues:{
        title: "Hear it From The  Community",
        description: "Thousands love our app - here how Visio cms makes content mangement simple",
        testimonials: [
            {
                name: "Emily Smith",
                message: "Visio CMS has transformed the way I manage my content. It's fast, easy, and efficient!",
                star: 5
            },
            {
                name: "Michael Johnson",
                message: "Managing my website content has never been smoother. Visio CMS is simply amazing!",
                star: 5
            },
            {
                name: "Sarah Williams",
                message: "The drag-and-drop functionality in Visio CMS is a lifesaver. Highly recommended!",
                star: 5
            },
            {
                name: "David Brown",
                message: "Visio CMS is a powerful tool that simplifies content updates and gives me full control!",
                star: 5
            }
            
        ]
    },
    lists: [
        {
            propName: "testimonials",
            label: "Testimonial",
            defaultValue: {
                name: "John Doe",
                message: "This is a testimonial message",
                star: 5
            }
        }
    ]
}

export default Testimonials;