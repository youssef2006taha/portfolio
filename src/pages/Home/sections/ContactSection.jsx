import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import SectionHeading from '../../../components/ui/SectionHeading';
import CustomInput from '../../../components/ui/CustomInput';
import emailjs from '@emailjs/browser';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../../../features/ui/toast/toastSlice';

const SERVICE_ID = 'service_m72d0yn';
const TEMPLATE_ID = 'template_6llwuqk';
const PUBLIC_KEY = 'G0C7UrxnHeEuzTdvp';

const initialFormData = {
  fullname: '',
  email: '',
  phone: '',
  message: '',
}
const initialErrors = {
  fullname: '',
  email: '',
  phone: '',
  message: '',
}

const portfolioRegex = {
  fullname: /^[\p{L}\s'-]{2,50}$/u,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^(\+?[0-9]{7,15})?$/,
  message: /^[\s\S]{10,1000}$/s,
};

export default function ContactSection({ contact }) {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.lang)
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);

  //* validation
  const validateContactForm = () => {
    const errors = {};

    // fullname
    if (!formData.fullname?.trim()) {
      errors.fullname = current == 'ar' ? "الاسم مطلوب" : 'Name required';
    } else if (!portfolioRegex.fullname.test(formData.fullname.trim())) {
      errors.fullname = current == 'ar' ? "الاسم غير صالح" : 'Invalid name';
    }

    // email
    if (!formData.email?.trim()) {
      errors.email = current == 'ar' ? "الايميل مطلوب" : 'Email required';
    } else if (!portfolioRegex.email.test(formData.email.trim())) {
      errors.email =  current == 'ar' ? "الايميل غير صالح" : 'Invalid email';
    }

    // phone
    if (formData.phone?.trim() && !portfolioRegex.phone.test(formData.phone.trim().replace(/\s+/g, ''))) {
      errors.phone = current == 'ar' ? "الهاتف غير صالح" : 'Invalid phone';
    }

    // message
    if (!formData.message?.trim()) {
      errors.message = current == 'ar' ? "الرسالة مطلوبة" : 'Message required';
    } else if (!portfolioRegex.message.test(formData.message.trim())) {
      errors.message =  current == 'ar' ? "10-1000 حرف" : '10-1000 chars';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }

  //* Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  //* Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(initialErrors);

    const er = validateContactForm();
    if (!er.isValid) {
      setErrors(er.errors);
      dispatch(
        showToast({
          message: 'Please complete all required fields correctly.',
          severity: 'warning',
        })
      );
      return;
    }
    setErrors(initialErrors);


    setLoading(true);

    const templateParams = {
      title: 'Portfolio Contact Form',
      time: new Date().toLocaleString(),
      name: formData.fullname,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      dispatch(
        showToast({
          message: 'Message sent successfully!',
          severity: 'success',
        })
      );
      setFormData(initialFormData);
    } catch (err) {
      console.error('EmailJS Error:', err);
      dispatch(
        showToast({
          message: 'Failed to send message. Please try again.',
          severity: 'error',
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-10 pt-15 pb-17">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* right */}
          <div className="grid auto-rows-[60px] gap-4">
            <SectionHeading className='row-span-2' title={contact.title} subtitle={contact.subtitle} />
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-2xl border border-text-light/10 bg-bg-surface/80 p-5 transition hover:border-primary/40"
              >
                <span className="text-primary flex-shrink-0"><Mail size={20} /></span>
                <span className="break-all text-sm text-text-muted">{contact.email}</span>
              </a>
            )}
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-4 rounded-2xl border border-text-light/10 bg-bg-surface/80 p-5 transition hover:border-primary/40"
              >
                <span className="text-primary flex-shrink-0"><Phone size={20} /></span>
                <span className="break-all text-sm text-text-muted">{contact.phone}</span>
              </a>
            )}
            <div className='flex gap-4'>
              {contact.location && (
                <div className="flex-1 flex items-center gap-4 rounded-2xl border border-text-light/10 bg-bg-surface/80 p-5">
                  <span className="text-primary flex-shrink-0"><MapPin size={20} /></span>
                  <span className="break-all text-sm text-text-muted">{contact.location}</span>
                </div>
              )}
              <a
                href="https://github.com/youssef2006taha"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="
                  text-primary hover:text-primary/80
                  flex justify-center items-center gap-4 
                  rounded-2xl border border-text-light/10 
                  bg-bg-surface/80 h-full aspect-square
                  transition hover:border-primary/40
                "
              >
                <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/youssef-taha-819982350/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="
                  text-primary hover:text-primary/80
                  flex justify-center items-center gap-4 
                  rounded-2xl border border-text-light/10 
                  bg-bg-surface/80 h-full aspect-square
                  transition hover:border-primary/40
                "
              >
                <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

            </div>

          </div>

          {/* left */}
          <form onSubmit={handleSubmit} className="grid grid-cols-2 auto-rows-[60px] gap-4">

            <CustomInput
              type="text"
              name="fullname"
              wrapperClassName="col-span-2"
              value={formData.fullname}
              onChange={handleChange}
              placeholder={contact.form.namePlaceholder}
              error={errors.fullname}
            />

            <CustomInput
              type="email"
              name="email"
              wrapperClassName="col-span-1"
              value={formData.email}
              onChange={handleChange}
              placeholder={contact.form.emailPlaceholder}
              error={errors.email}
            />

            <CustomInput
              type="text"
              inputMode="numeric"
              name="phone"
              wrapperClassName="col-span-1"
              value={formData.phone}
              onChange={handleChange}
              placeholder={contact.form.phonePlaceholder}
              error={errors.phone}
            />

            <CustomInput 
              isTextArea
              rows="5"
              name="message"
              wrapperClassName="col-span-2 row-span-2"
              value={formData.message}
              onChange={handleChange}
              placeholder={contact.form.messagePlaceholder}
              error={errors.message}
            />

            <button
              type="submit"
              disabled={loading}
              className={`
                h-full inline-flex items-center justify-center gap-2 px-6 self-start
                rounded-xl bg-linear-to-r from-primary to-ball-1 font-semibold text-primary-inverse text-sm sm:text-base
                shadow-2xl transition-all duration-500 group
                ${loading 
                  ? 'opacity-70 cursor-not-allowed pointer-events-none' 
                  : 'hover:shadow-primary/30 hover:scale-105 cursor-pointer'
                }
              `}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span className="relative overflow-hidden w-5 h-5 flex items-center justify-center">
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-6 group-hover:translate-x-6"
                    />
                    <Send
                      size={18}
                      className="absolute transition-transform duration-300 translate-y-6 -translate-x-6 group-hover:translate-y-0 group-hover:translate-x-0"
                    />
                  </span>
                  {contact.form.submitBtn}
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
