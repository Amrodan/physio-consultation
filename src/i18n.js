import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: true,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false // not needed for react as it escapes by default
		},
		resources: {
			en: {
				translation: {
					description: {
						part1:
							' Vernicke is a platform that connects physiotherapists with patients. The platform is a tool that helps patients to find the best physiotherapist for them ',
						part2:
							"Let's not wait for perfect conditions to begin. Let's begin to make perfection  conditions for a healthy physical condition",
						part3:
							'Online physiotherapy can be a convenient and effective way to manage injuries and guide your recovery',
						part4: 'Visit my Channel on youtube',
						part5: 'Joerg Teichmann',
						part6: 'Participate in Discussions',
						part7:
							'	A physiotherapist can treat you if you have a problem with pain or movement. Physiotherapy could help you become more mobile and make you more comfortable.',
						part8:
							'Physiotherapy uses physical techniques to improve movement, reduce pain and stiffness, speed up the healing process and increase quality of life.',
						part9:
							'Physiotherapists diagnose and manage a broad range of conditions with the bones, muscles,cardiovascular system, nerves and other parts and systems of the body. They can help people to manage chronic diseases, give lifestyle advice, prescribe exercises and aids to help people manage better, and give advice. When you go to see a physiotherapist, they might :',
						part10: 'massage areas of your body',
						part11: 'manipulate your joints',
						part12: 'stretch your muscles',
						part13: 'give you exercises to do',
						part14: 'A physiotherapist will assess your condition and help you with physical problems.',
						part15:
							'These might have come about because of an accident or injury, or you might have had them most of your life. Some physiotherapists treat children who have problems with their movement. They also show parents how to improve their child’s quality of life.',
						part16: 'How can physiotherapy help me?',
						part17: 'A physiotherapist can help treat many things, including :',
						part18: 'back and knee pain',
						part19: 'sports injuries',
						part20: 'arthritis',
						part21: ' aches, sprains and injuries',
						part22: 'incontinence neurological conditions, like Parkinson’s disease or multiple sclerosis',
						part23: 'chronic diseases like diabetes, osteoarthritis, osteoporosis and obesity',
						part24: 'managing after a stroke',
						part25: 'recovery from broken bones',
						part26: 'rehabilitation after surgery',
						part27: 'developmental delays in children',
						part28: 'occupational health',
						part31: 'What is physiotherapy?',
						part29: 'They can also help you reduce the chance of future injuries.',
						part30: 'What does a physiotherapist do',
						part36: 'Choose the date below'
					}
				}
			},

			ar: {
				translation: {
					description: {
						part1:
							' عبارة عن منصة تربط المعالجين الفيزيائيين بالمرضى. المنصة هي أداة تساعد المرضى في العثور على أفضل أخصائي علاج طبيعي لهم Vernicke',
						part2: ' لا ننتظر حتى تبدأ الظروف المثالية. فلنبدأ في تهيئة ظروف مثالية لحالة بدنية صحية   ',
						part3:
							'يمكن أن يكون العلاج الطبيعي عبر الإنترنت طريقة ملائمة وفعالة لإدارة الإصابات وتوجيه شفائك  ',
						part4: 'لزيارة قناتي على يوتيوب',
						part5: ' يورج تيشمان',
						part6: 'اسأل الخبير',
						part7:
							'يمكن لأخصائي العلاج الطبيعي أن يعالجك إذا كنت تعاني من مشكلة في الألم أو الحركة. يمكن أن يساعدك العلاج الطبيعي على أن تصبح أكثر قدرة على الحركة ويجعلك أكثر راحة.						',
						part8:
							'يستخدم العلاج الطبيعي تقنيات جسدية لتحسين الحركة وتقليل الألم والتيبس وتسريع عملية الشفاء وزيادة جودة الحياة.',
						part9:
							'يقوم أخصائيو العلاج الطبيعي بتشخيص وإدارة مجموعة واسعة من الحالات في العظام والعضلات والجهاز القلبي الوعائي والأعصاب وأجزاء وأنظمة أخرى من الجسم. يمكنهم مساعدة الناس على إدارة الأمراض المزمنة ، وتقديم المشورة بشأن نمط الحياة ، ووصف التمارين والمساعدات لمساعدة الناس على إدارة أفضل ، وتقديم المشورة. عندما تذهب لرؤية أخصائي علاج طبيعي ، قد:',
						part10: 'تدليك مناطق الجسم',
						part11: 'التلاعب في مفاصلك',
						part12: 'شد عضلاتك',
						part13: 'تعطيك تمارين للقيام بها',
						part14: 'سيقوم أخصائي العلاج الطبيعي بتقييم حالتك ومساعدتك في حل المشكلات الجسدية.',
						part15:
							'ربما تكون هذه قد حدثت بسبب حادث أو إصابة ، أو ربما تكون قد عانيت منها معظم حياتك. يعالج بعض اختصاصي العلاج الطبيعي الأطفال الذين يعانون من مشاكل في حركتهم. كما يوضحون للآباء كيفية تحسين نوعية حياة أطفالهم.',
						part16: 'كيف يمكن أن يساعدني العلاج الطبيعي؟',
						part17: 'يمكن لأخصائي العلاج الطبيعي أن يساعد في علاج العديد من الأشياء ، بما في ذلك:',
						part18: 'آلام الظهر والركبة',
						part19: 'الإصابات الرياضية',
						part20: 'التهاب المفاصل',
						part21: 'الأوجاع والالتواء والإصابات',
						part22: 'حالات سلس البول العصبية ، مثل مرض باركنسون أو التصلب المتعدد',
						part23: 'الأمراض المزمنة مثل مرض السكري وهشاشة العظام والسمنة',
						part24: 'التدبير بعد السكتة الدماغية',
						part25: 'الشفاء من كسور العظام',
						part26: 'إعادة التأهيل بعد الجراحة						',
						part27: 'تأخر النمو عند الأطفال						',
						part28: 'صحة مهنية',
						part29: 'يمكنهم أيضًا مساعدتك في تقليل فرصة التعرض لإصابات في المستقبل',
						part31: 'ما هو العلاج الطبيعي؟',
						part30: 'ماذا يفعل اخصائي العلاج الطبيعي؟',
						part36: 'اختر التاريخ أدناه'
					}
				}
			}
		}
	});

export default i18n;
