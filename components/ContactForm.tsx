// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// export default function ContactForm() {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSubmitStatus('success');
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <motion.form
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       onSubmit={handleSubmit}
//       className="max-w-lg mx-auto mt-8 space-y-6"
//     >
//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           required
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint text-white"
//           placeholder="Your name"
//         />
//       </div>

//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           required
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint text-white"
//           placeholder="your@email.com"
//         />
//       </div>

//       <div>
//         <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//           Message
//         </label>
//         <textarea
//           id="message"
//           required
//           value={formData.message}
//           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//           rows={4}
//           className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint text-white resize-none"
//           placeholder="Your message..."
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full bg-mint text-black px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         {isSubmitting ? 'Sending...' : 'Send Message'}
//       </button>

//       {submitStatus === 'success' && (
//         <p className="text-mint text-center">Message sent successfully!</p>
//       )}
//       {submitStatus === 'error' && (
//         <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
//       )}
//     </motion.form>
//   );
// } 