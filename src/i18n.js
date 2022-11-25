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
						part6: 'Join Our Discussion Group'
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
						part6: 'انضم إلى مجموعة المناقشة الخاصة بنا',
						part7: 'استشارة العلاج الطبيعي'
					}
				}
			}
		}
	});

export default i18n;
