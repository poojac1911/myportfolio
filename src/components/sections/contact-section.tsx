"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
   email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, { message: "Message must not exceed 500 characters." }),
})

export default function ContactSection() {
   const { toast } = useToast()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement actual email sending via a Server Action or API route.
    // This requires setting up an email service (e.g., Nodemailer, SendGrid, Resend).
    console.log("Attempting to send email with the following data:");
    console.log("To: choudharypooja0107@gmail.com");
    console.log("From Name:", values.name);
    console.log("From Email:", values.email);
    console.log("Message:", values.message);

    // Simulate submission delay for user feedback
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
       // In a real implementation, the Server Action/API call would happen here.
       // For now, we assume success.

       // Show success toast
        toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        })

        // Reset form
        form.reset()

    } catch (error) {
        console.error('Failed to send message (simulation):', error);
        toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your message. Please try again later.",
            variant: "destructive",
        })
    }
  }

  return (
    <section id="contact" className="bg-secondary dark:bg-secondary/80">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question, project idea, or just want to connect? Feel free to reach out!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
           <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
              <div>
                <h4 className="font-medium">Email</h4>
                <a href="mailto:poojachoudhary8067@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  poojachoudhary8067@gmail.com
                </a>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
               <div>
                <h4 className="font-medium">Phone</h4>
                <a href="tel:+917387837638" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 73878 37638
                </a>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
               <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Mumbai, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-[-4px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[-4px_4px_15px_rgba(0,0,0,0.2)]">
             <CardHeader>
                <CardTitle>Send a Message</CardTitle>
             </CardHeader>
            <CardContent>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Your message..." {...field} rows={5}/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" disabled={form.formState.isSubmitting}>
                     {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </form>
                </Form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
