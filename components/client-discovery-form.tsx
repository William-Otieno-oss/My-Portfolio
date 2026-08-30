'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const websitePackages = [
  {
    title: 'Starter Website',
    price: '$199',
    description: 'Perfect for individuals, freelancers and small businesses.',
    features: [
      '1-page responsive website',
      'Modern custom design',
      'Mobile & desktop optimization',
      'Contact/CTA section',
      'WhatsApp integration',
      'Basic SEO',
      'Social media links',
      'Deployment',
      '1 revision round',
    ],
    timing: '3–5 days',
  },
  {
    title: 'Business Website',
    price: '$399',
    description: 'A complete online presence for growing businesses.',
    features: [
      'Up to 5 pages',
      'Custom responsive design',
      'Modern animations',
      'Contact form',
      'WhatsApp integration',
      'Google Maps',
      'Basic SEO',
      'Social media integration',
      'Performance optimization',
      'Deployment',
      '2 revision rounds',
    ],
    timing: '5–10 days',
  },
  {
    title: 'Professional Website',
    price: '$699+',
    description: 'For businesses that need a more advanced digital experience.',
    features: [
      'Up to 8 pages',
      'Custom UI/UX',
      'Advanced animations',
      'CMS/content management',
      'Forms & integrations',
      'Analytics',
      'SEO setup',
      'Performance optimization',
      'Deployment',
      '3 revision rounds',
    ],
    timing: '1–2 weeks',
  },
];

const appPackages = [
  {
    title: 'Custom Web App',
    price: 'From $799',
    description: 'Build a custom application around your business or idea.',
    features: [
      'User accounts',
      'Authentication',
      'Databases',
      'Dashboards',
      'APIs',
      'Search & filtering',
      'Payments',
      'Admin panels',
      'Notifications',
      'Third-party integrations',
    ],
  },
];

const aiPackages = [
  {
    title: 'AI Integration',
    price: 'From $150',
    description: 'Add AI capabilities to an existing website or application.',
    features: [
      'AI chatbots',
      'AI assistants',
      'AI search',
      'Content generation',
      'Document processing',
      'Recommendations',
      'AI-powered automation',
    ],
  },
  {
    title: 'AI Application',
    price: 'From $999',
    description: 'A complete AI-powered web application designed around your specific use case.',
    features: [
      'Custom UI',
      'AI integration',
      'Application logic',
      'Deployment',
    ],
    note: 'AI/API usage costs are billed separately.',
  },
];

const addOnServices = [
  'Additional page — $50+',
  'WhatsApp integration — $40+',
  'Booking system — $150+',
  'CMS — $150+',
  'Blog — $100+',
  'Payment integration — $200+',
  'API integration — $150+',
  'Analytics — $50+',
  'SEO setup — $100+',
  'Additional revision round — $75+',
];

const maintenancePlans = [
  {
    name: 'Basic',
    price: '$30/month',
    features: ['Minor updates', 'Bug fixes', 'Basic monitoring'],
  },
  {
    name: 'Standard',
    price: '$75/month',
    features: ['Minor updates', 'Bug fixes', 'Performance monitoring', 'Backups', 'Up to 2 hours of changes/month'],
  },
  {
    name: 'Premium',
    price: '$150/month',
    features: ['Priority support', 'Up to 5 hours of changes/month', 'New sections/pages', 'Performance optimization', 'Ongoing technical maintenance'],
  },
];

const progressSteps = [
  'Share your business goals',
  'Complete the discovery form',
  'Receive a tailored proposal',
];

const discoverySections = [
  {
    title: '1. About Your Business',
    fields: [
      ['Business/Company Name', 'businessName'],
      ['What does your business do?', 'businessDescription'],
      ['What products or services do you offer?', 'servicesOffered'],
      ['What makes your business different from competitors?', 'uniqueValue'],
      ['Who are your main competitors?', 'competitors'],
      ['Website/social media links:', 'links'],
    ],
  },
  {
    title: '2. Project Goals',
    fields: [
      ['Why do you want this website/application?', 'projectReason'],
      ['What is the main goal of the project?', 'mainGoal'],
      ['What should visitors/users do after using it?', 'desiredAction'],
      ['What would make this project successful for you?', 'successCriteria'],
    ],
  },
  {
    title: '3. Target Audience',
    fields: [
      ['Who is your ideal customer/user?', 'targetAudience'],
      ['Where are your customers/users located?', 'location'],
      ['What problem are they trying to solve?', 'userProblem'],
      ['Will most users access this from a phone, tablet, or computer?', 'deviceType'],
    ],
  },
  {
    title: '4. Website/Application Requirements',
    fields: [
      ['What pages do you need?', 'pagesNeeded'],
      ['What functionality do you need?', 'functionalityNeeded'],
      ['Please describe any functionality that is important to you:', 'importantFunctionality'],
    ],
  },
  {
    title: '5. Content & Assets',
    fields: [
      ['Do you already have a logo? Yes / No', 'hasLogo'],
      ['Do you have brand colors? Yes / No', 'hasBrandColors'],
      ['Do you have brand fonts/guidelines? Yes / No', 'hasBrandGuidelines'],
      ['Do you have professional photos? Yes / No', 'hasPhotos'],
      ['Do you already have the website text/content? Yes / No / Some of it', 'hasContent'],
      ['What other materials do you have?', 'materials'],
    ],
  },
  {
    title: '6. Design',
    fields: [
      ['What kind of visual style do you want?', 'style'],
      ['Please send 3–5 websites you like. For each one, tell me what you like about it.', 'referenceSites'],
      ['Are there any websites/design styles you dislike?', 'dislikedStyles'],
    ],
  },
  {
    title: '7. Technical Requirements',
    fields: [
      ['Do you already own a domain? Yes / No', 'hasDomain'],
      ['Do you already have hosting? Yes / No', 'hasHosting'],
      ['Do you already have an existing website? Yes / No', 'hasWebsite'],
      ['If yes, provide the URL:', 'existingWebsiteUrl'],
      ['Do you need any integrations?', 'integrations'],
    ],
  },
  {
    title: '8. Timeline',
    fields: [
      ['When would you ideally like the project completed?', 'idealCompletionDate'],
      ['Is this a hard deadline? Yes / No', 'hardDeadline'],
      ['Is there an event, campaign, launch, or business opening associated with the deadline?', 'deadlineContext'],
    ],
  },
  {
    title: '9. Budget',
    fields: [
      ['Do you have a budget range allocated for this project?', 'budgetRange'],
      ['Does this budget include hosting, domain, copywriting, photography, and maintenance?', 'budgetIncludes'],
    ],
  },
  {
    title: '10. Project Management',
    fields: [
      ['Who will be the primary contact for this project?', 'primaryContact'],
      ['Who will make the final decisions/approve the project?', 'finalApprover'],
      ['How would you prefer to communicate?', 'communicationPreference'],
    ],
  },
  {
    title: '11. After Launch',
    fields: [
      ['Who will update the website/application after launch?', 'postLaunchOwner'],
      ['Would you like ongoing maintenance and support? Yes / No / Maybe', 'ongoingMaintenance'],
      ['Do you expect to add new features in the future?', 'futureFeatures'],
    ],
  },
  {
    title: '12. Final Question',
    fields: [
      ['If we could accomplish only ONE thing with this project, what would you want it to accomplish?', 'singlePriority'],
    ],
  },
];

export function ClientDiscoveryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const name = String(payload.name ?? '').trim();
    const email = String(payload.email ?? '').trim();
    const projectType = String(payload.projectType ?? '').trim();

    if (!name || !email || !projectType || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/discovery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Discovery form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='space-y-10'>
      <div className='rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-600/20 via-white/5 to-cyan-500/10 p-6 sm:p-8'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-2xl'>
            <p className='text-xs uppercase tracking-[0.28em] text-blue-300 mb-3'>Project Intake</p>
            <h1 className='text-3xl sm:text-4xl font-semibold text-white'>Web & Digital Development Services</h1>
            <p className='mt-4 text-gray-300'>
              Share your needs, timeline, and goals, and I’ll turn that into a clear product plan,
              cost estimate, and next-step recommendation.
            </p>
          </div>
          <a
            href='#discovery-form'
            className='inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors'
          >
            Start the form
          </a>
        </div>
      </div>

      <div className='grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]'>
        <aside className='rounded-2xl border border-white/10 bg-white/5 p-5 h-fit lg:sticky lg:top-24'>
          <p className='text-xs uppercase tracking-[0.25em] text-gray-400'>Process</p>
          <div className='mt-5 space-y-4'>
            {progressSteps.map((step, index) => (
              <div key={step} className='flex items-start gap-3'>
                <div className='mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 text-sm font-medium text-blue-300'>
                  {index + 1}
                </div>
                <p className='text-sm text-gray-200'>{step}</p>
              </div>
            ))}
          </div>
        </aside>

        <div id='discovery-form' className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8'>
          <div className='mb-8'>
            <p className='text-sm uppercase tracking-[0.2em] text-blue-400 mb-2'>Discovery</p>
            <h3 className='text-3xl font-semibold'>Client Project Discovery Form</h3>
            <p className='text-gray-400 mt-3'>
              Before we begin, I’d like to understand your business, goals, audience, and
              requirements so the project fits the real problem you need to solve.
            </p>
          </div>

          <form className='space-y-10' onSubmit={handleSubmit}>
            <div className='rounded-xl border border-white/10 bg-slate-950/30 p-5'>
              <h4 className='mb-4 text-xl font-semibold text-white'>Contact details</h4>
              <div className='grid gap-5 md:grid-cols-3'>
                <div>
                  <label htmlFor='name' className='mb-2 block text-sm text-gray-300'>Name</label>
                  <input id='name' name='name' type='text' required placeholder='Your full name' className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500' />
                </div>
                <div>
                  <label htmlFor='email' className='mb-2 block text-sm text-gray-300'>Email</label>
                  <input id='email' name='email' type='email' required placeholder='you@example.com' className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500' />
                </div>
                <div>
                  <label htmlFor='projectType' className='mb-2 block text-sm text-gray-300'>Project type</label>
                  <select id='projectType' name='projectType' required style={{ colorScheme: 'dark' }} className='w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 hover:border-white/20 focus:border-blue-500 focus:outline-none transition-colors text-white [background-image:none]'>
                    <option value='' className='bg-slate-900 text-white'>Select one</option>
                    <option value='Website' className='bg-slate-900 text-white'>Website</option>
                    <option value='Web App' className='bg-slate-900 text-white'>Web App</option>
                    <option value='AI Product' className='bg-slate-900 text-white'>AI Product</option>
                    <option value='Maintenance' className='bg-slate-900 text-white'>Maintenance</option>
                    <option value='Other' className='bg-slate-900 text-white'>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {discoverySections.map((section) => (
              <div key={section.title} className='space-y-5 border-b border-white/10 pb-8 last:border-b-0 last:pb-0'>
                <h4 className='text-xl font-semibold text-white'>{section.title}</h4>
                <div className='space-y-5'>
                  {section.fields.map(([label, name]) => (
                    <div key={name}>
                      <label htmlFor={name} className='block text-sm text-gray-300 mb-2'>
                        {label}
                      </label>
                      {[
                        'businessName',
                        'businessDescription',
                        'servicesOffered',
                        'uniqueValue',
                        'competitors',
                        'links',
                        'projectReason',
                        'mainGoal',
                        'desiredAction',
                        'successCriteria',
                        'targetAudience',
                        'location',
                        'userProblem',
                        'deviceType',
                        'pagesNeeded',
                        'functionalityNeeded',
                        'importantFunctionality',
                        'hasLogo',
                        'hasBrandColors',
                        'hasBrandGuidelines',
                        'hasPhotos',
                        'hasContent',
                        'materials',
                        'style',
                        'referenceSites',
                        'dislikedStyles',
                        'hasDomain',
                        'hasHosting',
                        'hasWebsite',
                        'existingWebsiteUrl',
                        'integrations',
                        'idealCompletionDate',
                        'hardDeadline',
                        'deadlineContext',
                        'budgetRange',
                        'budgetIncludes',
                        'primaryContact',
                        'finalApprover',
                        'communicationPreference',
                        'postLaunchOwner',
                        'ongoingMaintenance',
                        'futureFeatures',
                        'singlePriority',
                      ].includes(name) ? (
                        <textarea
                          id={name}
                          name={name}
                          rows={3}
                          placeholder='Answer'
                          className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none'
                        />
                      ) : (
                        <input
                          type='text'
                          id={name}
                          name={name}
                          placeholder='Answer'
                          className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500'
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className='flex flex-col items-end gap-3 pt-4'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors duration-200'
              >
                {isSubmitting ? 'Sending...' : 'Send discovery form'}
                <ArrowRight className='w-4 h-4' />
              </button>

              {submitStatus === 'success' && (
                <p className='text-sm text-green-400'>Your project intake has been received successfully.</p>
              )}

              {submitStatus === 'error' && (
                <p className='text-sm text-red-400'>Something went wrong. Please try again or email directly.</p>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className='space-y-8'>
        <div className='text-center'>
          <p className='text-xs uppercase tracking-[0.3em] text-blue-300'>Service packages</p>
          <h3 className='mt-3 text-3xl font-semibold text-white'>Flexible pricing for every stage</h3>
        </div>

        <div className='space-y-8'>
          <section className='space-y-5'>
            <h4 className='text-2xl font-semibold text-white'>Website packages</h4>
            <div className='grid gap-6 lg:grid-cols-3'>
              {websitePackages.map((pkg) => (
                <article key={pkg.title} className='rounded-2xl border border-white/10 bg-white/5 p-6'>
                  <div className='flex items-center justify-between gap-3'>
                    <h5 className='text-xl font-semibold text-white'>{pkg.title}</h5>
                    <span className='text-sm text-gray-300'>{pkg.timing}</span>
                  </div>
                  <div className='mt-4 text-3xl font-bold text-white'>{pkg.price}</div>
                  <p className='mt-3 text-sm text-gray-300'>{pkg.description}</p>
                  <ul className='mt-5 space-y-3 text-sm text-gray-200'>
                    {pkg.features.map((feature) => (
                      <li key={feature} className='flex gap-2'>
                        <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-blue-400' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className='space-y-5'>
            <h4 className='text-2xl font-semibold text-white'>App packages</h4>
            <div className='grid gap-6 lg:grid-cols-1'>
              {appPackages.map((pkg) => (
                <article key={pkg.title} className='rounded-2xl border border-white/10 bg-white/5 p-6'>
                  <div className='flex items-center justify-between gap-3'>
                    <h5 className='text-xl font-semibold text-white'>{pkg.title}</h5>
                    <span className='text-sm text-blue-300'>{pkg.price}</span>
                  </div>
                  <p className='mt-3 text-sm text-gray-300'>{pkg.description}</p>
                  <ul className='mt-5 space-y-3 text-sm text-gray-200'>
                    {pkg.features.map((feature) => (
                      <li key={feature} className='flex gap-2'>
                        <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-blue-400' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className='mt-4 text-sm font-medium text-blue-300'>Final pricing depends on functionality and complexity.</p>
                </article>
              ))}
            </div>
          </section>

          <section className='space-y-5'>
            <h4 className='text-2xl font-semibold text-white'>AI services</h4>
            <div className='grid gap-6 lg:grid-cols-2'>
              {aiPackages.map((pkg) => (
                <article key={pkg.title} className='rounded-2xl border border-white/10 bg-white/5 p-6'>
                  <div className='flex items-center justify-between gap-3'>
                    <h5 className='text-xl font-semibold text-white'>{pkg.title}</h5>
                    <span className='text-sm text-blue-300'>{pkg.price}</span>
                  </div>
                  <p className='mt-3 text-sm text-gray-300'>{pkg.description}</p>
                  <ul className='mt-5 space-y-3 text-sm text-gray-200'>
                    {pkg.features.map((feature) => (
                      <li key={feature} className='flex gap-2'>
                        <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-blue-400' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.note ? <p className='mt-4 text-sm font-medium text-blue-300'>{pkg.note}</p> : null}
                </article>
              ))}
            </div>
          </section>

          <section className='space-y-5'>
            <h4 className='text-2xl font-semibold text-white'>Add-ons</h4>
            <div className='rounded-2xl border border-white/10 bg-white/5 p-6'>
              <ul className='space-y-3 text-sm text-gray-200'>
                {addOnServices.map((item) => (
                  <li key={item} className='flex gap-2'>
                    <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-blue-400' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className='space-y-5'>
            <h4 className='text-2xl font-semibold text-white'>Maintenance</h4>
            <div className='grid gap-6 lg:grid-cols-3'>
              {maintenancePlans.map((plan) => (
                <article key={plan.name} className='rounded-2xl border border-white/10 bg-white/5 p-6'>
                  <div className='flex items-center justify-between gap-3'>
                    <h5 className='text-lg font-semibold text-white'>{plan.name}</h5>
                    <span className='text-sm text-blue-300'>{plan.price}</span>
                  </div>
                  <ul className='mt-4 space-y-3 text-sm text-gray-200'>
                    {plan.features.map((feature) => (
                      <li key={feature} className='flex gap-2'>
                        <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-blue-400' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className='rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-600/20 via-white/5 to-cyan-500/10 p-6 sm:p-8'>
          <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
            <div>
              <p className='text-xs uppercase tracking-[0.28em] text-blue-300'>Proposal</p>
              <h4 className='mt-2 text-2xl font-semibold text-white'>Need a custom scope?</h4>
              <p className='mt-2 text-gray-300'>Every project is different. If your requirements don&apos;t fit one of the packages above, I&apos;ll create a custom proposal based on your goals, features and timeline.</p>
            </div>
            <a
              href='#discovery-form'
              className='inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors'
            >
              Request a proposal
            </a>
          </div>
        </div>

        <div className='rounded-2xl border border-white/10 bg-white/5 p-6'>
          <h4 className='text-2xl font-semibold text-white'>Important Information</h4>
          <div className='mt-5 space-y-6 text-sm text-gray-200'>
            <div>
              <h5 className='text-lg font-medium text-white'>Payment</h5>
              <p className='mt-2'>Projects require a <span className='font-semibold text-white'>50% deposit before development begins</span>.</p>
              <p className='mt-2'>The remaining balance is due before final launch/handover. For larger projects, milestone-based payments may be used.</p>
            </div>

            <div>
              <h5 className='text-lg font-medium text-white'>Revisions</h5>
              <p className='mt-2'>Each package includes a specific number of revision rounds. Additional revisions or major changes to the agreed scope may incur additional charges.</p>
            </div>

            <div>
              <h5 className='text-lg font-medium text-white'>Third-Party Costs</h5>
              <p className='mt-2'>Domain names, hosting, paid APIs, software subscriptions, premium assets, payment processing fees and other third-party services are not included unless explicitly stated.</p>
            </div>

            <div>
              <h5 className='text-lg font-medium text-white'>Custom Projects</h5>
              <p className='mt-2'>Every project is different. If your requirements don&apos;t fit one of the packages above, I&apos;ll create a custom proposal based on your goals, features and timeline.</p>
            </div>

            <p className='text-base font-semibold text-blue-300'>Have an idea? Let&apos;s build it.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
