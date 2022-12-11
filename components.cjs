module.exports = {
	'*,\n::before,\n::after': {
		boxSizing: 'border-box',
		borderWidth: '0',
		borderStyle: 'solid',
		borderColor: '#e5e7eb',
	},
	'::before,\n::after': { '-TwContent': "''" },
	html: {
		lineHeight: '1.5',
		WebkitTextSizeAdjust: '100%',
		MozTabSize: '4',
		OTabSize: '4',
		tabSize: '4',
		fontFamily:
			'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		fontFeatureSettings: 'normal',
		WebkitTapHighlightColor: 'rgba(128, 128, 128, 0.5)',
	},
	body: {
		margin: '0',
		lineHeight: 'inherit',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-50) / var(--tw-bg-opacity))',
		fontFamily: 'var(--theme-font-family-base)',
		color: 'rgba(var(--theme-font-color-base))',
	},
	hr: { height: '0', color: 'inherit', borderTopWidth: '1px' },
	'abbr:where([title])': {
		WebkitTextDecoration: 'underline dotted',
		textDecoration: 'underline dotted',
	},
	'h1,\nh2,\nh3,\nh4,\nh5,\nh6': { fontSize: 'inherit', fontWeight: 'inherit' },
	a: { color: 'inherit', textDecoration: 'inherit' },
	'b,\nstrong': { fontWeight: 'bolder' },
	'code,\nkbd,\nsamp,\npre': {
		fontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		fontSize: '1em',
	},
	small: { fontSize: '80%' },
	'sub,\nsup': {
		fontSize: '75%',
		lineHeight: '0',
		position: 'relative',
		verticalAlign: 'baseline',
	},
	sub: { bottom: '-0.25em' },
	sup: { top: '-0.5em' },
	table: {
		textIndent: '0',
		borderColor: 'inherit',
		borderCollapse: 'collapse',
	},
	'button,\ninput,\noptgroup,\nselect,\ntextarea': {
		fontFamily: 'inherit',
		fontSize: '100%',
		fontWeight: 'inherit',
		lineHeight: 'inherit',
		color: 'inherit',
		margin: '0',
		padding: '0',
	},
	'button,\nselect': { textTransform: 'none' },
	"button,\n[type='button'],\n[type='reset'],\n[type='submit']": {
		WebkitAppearance: 'button',
		backgroundColor: 'transparent',
		backgroundImage: 'none',
	},
	':-moz-focusring': { outline: 'auto' },
	':-moz-ui-invalid': { boxShadow: 'none' },
	progress: { verticalAlign: 'baseline' },
	'::-webkit-inner-spin-button,\n::-webkit-outer-spin-button': {
		height: 'auto',
	},
	"[type='search']": { WebkitAppearance: 'textfield', outlineOffset: '-2px' },
	'::-webkit-search-decoration': { WebkitAppearance: 'none' },
	'::-webkit-file-upload-button': {
		WebkitAppearance: 'button',
		font: 'inherit',
	},
	summary: { display: 'list-item' },
	'blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre':
		{ margin: '0' },
	fieldset: { margin: '0', padding: '0', display: 'block' },
	legend: { padding: '0' },
	'ol,\nul,\nmenu': { listStyle: 'none', margin: '0', padding: '0' },
	textarea: { resize: 'vertical' },
	'input::-moz-placeholder, textarea::-moz-placeholder': {
		opacity: ['1', '1'],
		color: [
			'#9ca3af',
			'#6b7280',
			'rgb(var(--color-surface-400) / var(--tw-text-opacity))',
		],
		'-TwTextOpacity': '1',
	},
	'input::placeholder,\ntextarea::placeholder': {
		opacity: '1',
		color: '#9ca3af',
	},
	'button,\n[role="button"]': { cursor: 'pointer' },
	':disabled': { cursor: 'default' },
	'img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject': {
		display: 'block',
		verticalAlign: 'middle',
	},
	'img,\nvideo': { maxWidth: '100%', height: 'auto' },
	'[hidden]': { display: 'none' },
	"[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select":
		{
			WebkitAppearance: 'none',
			MozAppearance: 'none',
			appearance: 'none',
			backgroundColor: '#fff',
			borderColor: '#6b7280',
			borderWidth: '1px',
			borderRadius: '0px',
			paddingTop: '0.5rem',
			paddingRight: '0.75rem',
			paddingBottom: '0.5rem',
			paddingLeft: '0.75rem',
			fontSize: '1rem',
			lineHeight: '1.5rem',
			'-TwShadow': '0 0 #0000',
		},
	"[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus":
		{
			outline: '2px solid transparent',
			outlineOffset: '2px',
			'-TwRingInset': 'var(--tw-empty, )',
			'-TwRingOffsetWidth': '0px',
			'-TwRingOffsetColor': '#fff',
			'-TwRingColor': '#2563eb',
			'-TwRingOffsetShadow':
				'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
			'-TwRingShadow':
				'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
			boxShadow:
				'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
			borderColor: '#2563eb',
		},
	'input::placeholder,textarea::placeholder': {
		color: '#6b7280',
		opacity: '1',
	},
	'::-webkit-datetime-edit-fields-wrapper': { padding: '0' },
	'::-webkit-date-and-time-value': { minHeight: '1.5em' },
	'::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field':
		{ paddingTop: '0', paddingBottom: '0' },
	select: {
		backgroundImage:
			"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
		backgroundPosition: 'right 0.5rem center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '1.5em 1.5em',
		paddingRight: '2.5rem',
		WebkitPrintColorAdjust: 'exact',
		printColorAdjust: 'exact',
	},
	'[multiple]': {
		backgroundImage: 'initial',
		backgroundPosition: 'initial',
		backgroundRepeat: 'unset',
		backgroundSize: 'initial',
		paddingRight: '0.75rem',
		WebkitPrintColorAdjust: 'unset',
		printColorAdjust: 'unset',
	},
	"[type='checkbox'],[type='radio']": {
		WebkitAppearance: 'none',
		MozAppearance: 'none',
		appearance: 'none',
		padding: '0',
		WebkitPrintColorAdjust: 'exact',
		printColorAdjust: 'exact',
		display: 'inline-block',
		verticalAlign: 'middle',
		backgroundOrigin: 'border-box',
		WebkitUserSelect: 'none',
		MozUserSelect: 'none',
		userSelect: 'none',
		flexShrink: '0',
		height: '1rem',
		width: '1rem',
		color: '#2563eb',
		backgroundColor: '#fff',
		borderColor: '#6b7280',
		borderWidth: '1px',
		'-TwShadow': '0 0 #0000',
	},
	"[type='checkbox']": { borderRadius: '0px' },
	"[type='radio']": { borderRadius: ['100%', 'var(--theme-rounded-base)'] },
	"[type='checkbox']:focus,[type='radio']:focus": {
		outline: '2px solid transparent',
		outlineOffset: '2px',
		'-TwRingInset': 'var(--tw-empty, )',
		'-TwRingOffsetWidth': '2px',
		'-TwRingOffsetColor': '#fff',
		'-TwRingColor': '#2563eb',
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
	},
	"[type='checkbox']:checked,[type='radio']:checked": {
		borderColor: 'transparent',
		backgroundColor: 'currentColor',
		backgroundSize: '100% 100%',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	},
	"[type='checkbox']:checked": {
		backgroundImage:
			"url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
	},
	"[type='radio']:checked": {
		backgroundImage:
			"url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\")",
	},
	"[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus":
		{ borderColor: 'transparent', backgroundColor: 'currentColor' },
	"[type='checkbox']:indeterminate": {
		backgroundImage:
			"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\")",
		borderColor: 'transparent',
		backgroundColor: 'currentColor',
		backgroundSize: '100% 100%',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	},
	"[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus":
		{ borderColor: 'transparent', backgroundColor: 'currentColor' },
	"[type='file']": {
		background: 'unset',
		borderColor: 'inherit',
		borderWidth: '0',
		borderRadius: '0',
		padding: ['0', '0.5rem'],
		fontSize: 'unset',
		lineHeight: 'inherit',
	},
	"[type='file']:focus": {
		outline: ['1px solid ButtonText', '1px auto -webkit-focus-ring-color'],
	},
	'.dark body': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-900) / var(--tw-bg-opacity))',
		color: 'rgba(var(--theme-font-color-dark))',
	},
	'::-moz-selection': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.3)',
	},
	'::selection': { backgroundColor: 'rgb(var(--color-primary-500) / 0.3)' },
	'::-webkit-scrollbar': { width: '0.5rem' },
	'::-webkit-scrollbar-track': {
		paddingLeft: '1px',
		paddingRight: '1px',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-100) / var(--tw-bg-opacity))',
	},
	'.dark ::-webkit-scrollbar-track': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-800) / var(--tw-bg-opacity))',
	},
	'::-webkit-scrollbar-thumb': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-300) / var(--tw-bg-opacity))',
		borderRadius: 'var(--theme-rounded-base)',
	},
	'.dark ::-webkit-scrollbar-thumb': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-600) / var(--tw-bg-opacity))',
	},
	'.hide-scrollbar::-webkit-scrollbar': { display: 'none' },
	'.hide-scrollbar': { msOverflowStyle: 'none', scrollbarWidth: 'none' },
	'hr:not(.divider)': {
		display: 'block',
		borderTopWidth: '1px',
		borderStyle: 'solid',
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-surface-300) / var(--tw-border-opacity))',
	},
	'.dark hr:not(.divider)': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-surface-600) / var(--tw-border-opacity))',
	},
	'h1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6': {
		fontFamily: 'var(--theme-font-family-heading)',
	},
	h1: { fontSize: '1.875rem', lineHeight: '2.25rem' },
	'@media (min-width: 768px)': [
		{ h1: { fontSize: '3rem', lineHeight: '1' } },
		{ h2: { fontSize: '1.875rem', lineHeight: '2.25rem' } },
		{ h3: { fontSize: '1.5rem', lineHeight: '2rem' } },
		{ h4: { fontSize: '1.25rem', lineHeight: '1.75rem' } },
		{ h5: { fontSize: '1.125rem', lineHeight: '1.75rem' } },
		{ h6: { fontSize: '1rem', lineHeight: '1.5rem' } },
		{
			'code:not(.unstyled):not(.code-block code):not(article pre code)': {
				fontSize: '13px',
			},
		},
		{ '.container': { maxWidth: '768px' } },
		{ '.logo-item': { paddingTop: '2.5rem', paddingBottom: '2.5rem' } },
		{ '.table tbody td': { paddingTop: '0.75rem', paddingBottom: '0.75rem' } },
		{
			'.md\\:col-span-4': { gridColumn: 'span 4 / span 4' },
			'.md\\:col-span-2': { gridColumn: 'span 2 / span 2' },
			'.md\\:block': { display: 'block' },
			'.md\\:inline-block': { display: 'inline-block' },
			'.md\\:inline': { display: 'inline' },
			'.md\\:grid': { display: 'grid' },
			'.md\\:hidden': { display: 'none' },
			'.md\\:h-\\[40px\\]': { height: '40px' },
			'.md\\:max-h-\\[75vh\\]': { maxHeight: '75vh' },
			'.md\\:w-80': { width: '20rem' },
			'.md\\:w-auto': { width: 'auto' },
			'.md\\:grid-cols-2': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
			'.md\\:grid-cols-\\[128px_1fr\\]': { gridTemplateColumns: '128px 1fr' },
			'.md\\:grid-cols-\\[120px_1fr\\]': { gridTemplateColumns: '120px 1fr' },
			'.md\\:grid-cols-4': { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
			'.md\\:grid-cols-3': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
			'.md\\:grid-cols-\\[1fr_auto\\]': { gridTemplateColumns: '1fr auto' },
			'.md\\:grid-cols-1': { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
			'.md\\:grid-cols-5': { gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' },
			'.md\\:flex-row': { flexDirection: 'row' },
			'.md\\:place-items-start': { placeItems: 'start' },
			'.md\\:items-start': { alignItems: 'flex-start' },
			'.md\\:items-center': { alignItems: 'center' },
			'.md\\:justify-end': { justifyContent: 'flex-end' },
			'.md\\:justify-center': { justifyContent: 'center' },
			'.md\\:gap-20': { gap: '5rem' },
			'.md\\:gap-4': { gap: '1rem' },
			'.md\\:space-y-0 > :not([hidden]) ~ :not([hidden])': {
				'-TwSpaceYReverse': '0',
				marginTop: 'calc(0px * calc(1 - var(--tw-space-y-reverse)))',
				marginBottom: 'calc(0px * var(--tw-space-y-reverse))',
			},
			'.md\\:space-y-12 > :not([hidden]) ~ :not([hidden])': {
				'-TwSpaceYReverse': '0',
				marginTop: 'calc(3rem * calc(1 - var(--tw-space-y-reverse)))',
				marginBottom: 'calc(3rem * var(--tw-space-y-reverse))',
			},
			'.md\\:space-x-4 > :not([hidden]) ~ :not([hidden])': {
				'-TwSpaceXReverse': '0',
				marginRight: 'calc(1rem * var(--tw-space-x-reverse))',
				marginLeft: 'calc(1rem * calc(1 - var(--tw-space-x-reverse)))',
			},
			'.md\\:\\!whitespace-normal': { whiteSpace: 'normal !important' },
			'.md\\:p-10': { padding: '2.5rem' },
			'.md\\:py-20': { paddingTop: '5rem', paddingBottom: '5rem' },
			'.md\\:text-5xl': { fontSize: '3rem', lineHeight: '1' },
			'.md\\:\\!text-lg': {
				fontSize: '1.125rem !important',
				lineHeight: '1.75rem !important',
			},
			'.md\\:text-base': { fontSize: '1rem', lineHeight: '1.5rem' },
			'.md\\:text-3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' },
			'.md\\:text-green-500': {
				'-TwTextOpacity': '1',
				color: 'rgb(34 197 94 / var(--tw-text-opacity))',
			},
		},
	],
	h2: { fontSize: '1.5rem', lineHeight: '2rem' },
	h3: { fontSize: '1.25rem', lineHeight: '1.75rem' },
	h4: { fontSize: '1.125rem', lineHeight: '1.75rem' },
	h5: { fontSize: '1rem', lineHeight: '1.5rem' },
	h6: { fontSize: '0.875rem', lineHeight: '1.25rem' },
	'p:not(.unstyled)': {
		fontSize: '1rem',
		lineHeight: '1.5rem',
		color: 'rgba(var(--theme-font-color-base))',
	},
	'.dark p:not(.unstyled)': { color: 'rgba(var(--theme-font-color-dark))' },
	'a:not(.unstyled):not(.btn):not(.btn-icon):not(.app-bar a):not(.logo-item):not(.card):not(.list-nav a)':
		{
			textDecorationLine: 'underline',
			textDecorationColor: 'rgb(var(--color-primary-500) / 0.2)',
			textDecorationStyle: 'dotted',
			textUnderlineOffset: '4px',
			'-TwTextOpacity': '1',
			color: 'rgb(var(--color-primary-600) / var(--tw-text-opacity))',
		},
	'.dark a:not(.unstyled):not(.btn):not(.btn-icon):not(.app-bar a):not(.logo-item):not(.card):not(.list-nav a)':
		{
			'-TwTextOpacity': '1',
			color: 'rgb(var(--color-primary-300) / var(--tw-text-opacity))',
		},
	'a:not(.unstyled):not(.btn):not(.btn-icon):not(.app-bar a):not(.logo-item):not(.card):not(.list-nav a):hover':
		{ textDecorationColor: 'rgb(var(--color-primary-500))' },
	'blockquote:not(.unstyled)': {
		borderLeftWidth: '4px',
		'-TwBorderOpacity': '1',
		borderLeftColor: 'rgb(var(--color-accent-500) / var(--tw-border-opacity))',
		paddingRight: '1rem',
		paddingLeft: '1rem',
		fontSize: '1rem',
		lineHeight: '1.5rem',
		color: 'rgba(var(--theme-font-color-base))',
	},
	'.dark blockquote:not(.unstyled)': {
		color: 'rgba(var(--theme-font-color-dark))',
	},
	'kbd:not(.unstyled)': {
		borderRadius: '0.25rem',
		borderBottomWidth: '2px',
		paddingLeft: '0.375rem',
		paddingRight: '0.375rem',
		paddingTop: '0.125rem',
		paddingBottom: '0.125rem',
		fontFamily:
			'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important',
		fontSize: '0.75rem',
		lineHeight: '1rem',
		fontWeight: '700',
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-200) / var(--tw-bg-opacity))',
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-surface-400) / var(--tw-border-opacity))',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-surface-400) / var(--tw-ring-opacity))',
	},
	'.dark kbd:not(.unstyled)': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-700) / var(--tw-bg-opacity))',
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-surface-500) / var(--tw-border-opacity))',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-surface-500) / var(--tw-ring-opacity))',
	},
	'pre:not(.unstyled):not(.code-block pre)': {
		overflowX: 'auto',
		whiteSpace: 'pre-wrap',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(20 21 23 / var(--tw-bg-opacity))',
		padding: '1rem',
		fontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		fontSize: '1rem',
		lineHeight: '1.5rem',
		'-TwTextOpacity': '1',
		color: 'rgb(255 255 255 / var(--tw-text-opacity))',
		borderRadius: 'var(--theme-rounded-container)',
	},
	'code:not(.unstyled):not(.code-block code):not(article pre code)': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.2)',
		paddingTop: '0.25rem',
		paddingBottom: '0.25rem',
		paddingLeft: '0.5rem',
		paddingRight: '0.5rem',
		fontFamily: [
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important',
			'var(--theme-font-family-base)',
		],
		fontSize: '0.75rem',
		lineHeight: '1rem',
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-primary-800) / var(--tw-text-opacity))',
		borderRadius: 'var(--theme-rounded-base)',
	},
	'.dark code:not(.unstyled):not(.code-block code):not(article pre code)': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-primary-300) / var(--tw-text-opacity))',
	},
	'del,\n\tins': {
		position: 'relative',
		display: 'block',
		paddingLeft: '1.25rem',
		textDecoration: 'none',
	},
	'del::before,\n\tins::before': {
		position: 'absolute',
		left: '0.25rem',
		fontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
	},
	'del::before': { content: "'−'" },
	'ins::before': { content: "'+'" },
	del: {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(239 68 68 / var(--tw-bg-opacity))',
	},
	ins: {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(34 197 94 / var(--tw-bg-opacity))',
	},
	time: {
		fontSize: '0.875rem',
		lineHeight: '1.25rem',
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-500) / var(--tw-text-opacity))',
	},
	'.dark time': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-400) / var(--tw-text-opacity))',
	},
	label: { display: 'block', overflow: 'visible' },
	'label span,\n\tlegend': {
		marginBottom: '0.5rem',
		display: 'block',
		fontSize: '0.875rem',
		lineHeight: '1.25rem',
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-700) / var(--tw-text-opacity))',
	},
	'.dark label span,.dark \n\tlegend': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-300) / var(--tw-text-opacity))',
	},
	'input:disabled,\n\ttextarea:disabled,\n\tselect:disabled': {
		cursor: 'not-allowed !important',
		opacity: '0.5 !important',
	},
	'input:disabled:hover,\n\ttextarea:disabled:hover,\n\tselect:disabled:hover':
		{
			'-TwBrightness': 'brightness(1)',
			filter:
				'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
		},
	'input:disabled:active,\n\ttextarea:disabled:active,\n\tselect:disabled:active':
		{
			'-TwScaleX': '1',
			'-TwScaleY': '1',
			transform:
				'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
		},
	"[type='text'],\n\t[type='email'],\n\t[type='url'],\n\t[type='password'],\n\t[type='number'],\n\t[type='date'],\n\t[type='datetime-local'],\n\t[type='month'],\n\t[type='search'],\n\t[type='tel'],\n\t[type='time'],\n\t[type='week'],\n\t[type='file'],\n\t[multiple],\n\ttextarea,\n\tselect":
		{
			width: '100%',
			caretColor: 'rgb(var(--color-accent-500))',
			transitionProperty: 'all',
			transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
			transitionDuration: '200ms',
			'-TwTextOpacity': '1',
			color: 'rgb(0 0 0 / var(--tw-text-opacity))',
			'-TwBgOpacity': '1',
			backgroundColor: 'rgb(var(--color-surface-200) / var(--tw-bg-opacity))',
			'-TwBorderOpacity': '1',
			borderColor: 'rgb(var(--color-surface-400) / var(--tw-border-opacity))',
			'-TwShadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
			'-TwShadowColored': '0 1px 2px 0 var(--tw-shadow-color)',
			boxShadow:
				'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
			borderWidth: 'var(--theme-border-base)',
			borderRadius: 'var(--theme-rounded-base)',
		},
	"[type='text']:hover,\n\t[type='email']:hover,\n\t[type='url']:hover,\n\t[type='password']:hover,\n\t[type='number']:hover,\n\t[type='date']:hover,\n\t[type='datetime-local']:hover,\n\t[type='month']:hover,\n\t[type='search']:hover,\n\t[type='tel']:hover,\n\t[type='time']:hover,\n\t[type='week']:hover,\n\t[type='file']:hover,\n\t[multiple]:hover,\n\ttextarea:hover,\n\tselect:hover":
		{
			'-TwBrightness': 'brightness(1.1)',
			filter:
				'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
		},
	"[type='text']:focus,\n\t[type='email']:focus,\n\t[type='url']:focus,\n\t[type='password']:focus,\n\t[type='number']:focus,\n\t[type='date']:focus,\n\t[type='datetime-local']:focus,\n\t[type='month']:focus,\n\t[type='search']:focus,\n\t[type='tel']:focus,\n\t[type='time']:focus,\n\t[type='week']:focus,\n\t[type='file']:focus,\n\t[multiple]:focus,\n\ttextarea:focus,\n\tselect:focus":
		{
			'-TwRingOpacity': '1',
			'-TwRingColor': 'rgb(var(--color-accent-500) / var(--tw-ring-opacity))',
			'-TwBorderOpacity': '1',
			borderColor: 'rgb(var(--color-accent-500) / var(--tw-border-opacity))',
		},
	".dark [type='text'],.dark \n\t[type='email'],.dark \n\t[type='url'],.dark \n\t[type='password'],.dark \n\t[type='number'],.dark \n\t[type='date'],.dark \n\t[type='datetime-local'],.dark \n\t[type='month'],.dark \n\t[type='search'],.dark \n\t[type='tel'],.dark \n\t[type='time'],.dark \n\t[type='week'],.dark \n\t[type='file'],.dark \n\t[multiple],.dark \n\ttextarea,.dark \n\tselect":
		{
			'-TwTextOpacity': '1',
			color: 'rgb(255 255 255 / var(--tw-text-opacity))',
			'-TwBgOpacity': '1',
			backgroundColor: 'rgb(var(--color-surface-700) / var(--tw-bg-opacity))',
			'-TwBorderOpacity': '1',
			borderColor: 'rgb(var(--color-surface-500) / var(--tw-border-opacity))',
		},
	'.file-dropzone-input,\n\t[multiple],\n\ttextarea': {
		borderRadius: 'var(--theme-rounded-container)',
	},
	'.dark ::-webkit-calendar-picker-indicator': {
		'-TwInvert': 'invert(100%)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	"[type='checkbox'],\n\t[type='radio']": {
		height: '1.25rem',
		width: '1.25rem',
		borderRadius: '0.25rem',
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-surface-500) / var(--tw-border-opacity))',
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-accent-600) / var(--tw-text-opacity))',
	},
	"[type='checkbox']:focus,\n\t[type='radio']:focus": {
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-accent-500) / var(--tw-ring-opacity))',
	},
	'::-moz-placeholder,\n\ttextarea::-moz-placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-600) / var(--tw-text-opacity))',
	},
	'.dark ::-moz-placeholder,.dark \n\ttextarea::-moz-placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-300) / var(--tw-text-opacity))',
	},
	'::-moz-placeholder, textarea::-moz-placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-600) / var(--tw-text-opacity))',
	},
	'::placeholder,\n\ttextarea::placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-600) / var(--tw-text-opacity))',
	},
	'.dark ::-moz-placeholder, .dark \n\ttextarea::-moz-placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-300) / var(--tw-text-opacity))',
	},
	'.dark ::placeholder,.dark \n\ttextarea::placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-300) / var(--tw-text-opacity))',
	},
	'.input-valid': {
		'-TwBorderOpacity': '1 !important',
		borderColor: 'rgb(34 197 94 / var(--tw-border-opacity)) !important',
		'-TwBgOpacity': '1 !important',
		backgroundColor: 'rgb(187 247 208 / var(--tw-bg-opacity)) !important',
		'-TwTextOpacity': '1 !important',
		color: 'rgb(34 197 94 / var(--tw-text-opacity)) !important',
	},
	'.input-valid::-moz-placeholder,\n\ttextarea::-moz-placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(34 197 94 / var(--tw-text-opacity))',
	},
	'.input-valid::-moz-placeholder, textarea::-moz-placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(34 197 94 / var(--tw-text-opacity))',
	},
	'.input-valid::placeholder,\n\ttextarea::placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(34 197 94 / var(--tw-text-opacity))',
	},
	'.input-invalid': {
		'-TwBorderOpacity': '1 !important',
		borderColor: 'rgb(239 68 68 / var(--tw-border-opacity)) !important',
		'-TwBgOpacity': '1 !important',
		backgroundColor: 'rgb(254 202 202 / var(--tw-bg-opacity)) !important',
		'-TwTextOpacity': '1 !important',
		color: 'rgb(239 68 68 / var(--tw-text-opacity)) !important',
	},
	'.input-invalid::-moz-placeholder,\n\ttextarea::-moz-placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(239 68 68 / var(--tw-text-opacity))',
	},
	'.input-invalid::-moz-placeholder, textarea::-moz-placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(239 68 68 / var(--tw-text-opacity))',
	},
	'.input-invalid::placeholder,\n\ttextarea::placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(239 68 68 / var(--tw-text-opacity))',
	},
	'input::-moz-placeholder,\n\ttextarea::-moz-placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-400) / var(--tw-text-opacity))',
	},
	'input::placeholder,\n\ttextarea::placeholder': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-400) / var(--tw-text-opacity))',
	},
	"[type='range']:not(.range-input)": {
		width: '100%',
		accentColor: 'rgb(var(--color-accent-500))',
	},
	'*, ::before, ::after': {
		'-TwBorderSpacingX': '0',
		'-TwBorderSpacingY': '0',
		'-TwTranslateX': '0',
		'-TwTranslateY': '0',
		'-TwRotate': '0',
		'-TwSkewX': '0',
		'-TwSkewY': '0',
		'-TwScaleX': '1',
		'-TwScaleY': '1',
		'-TwPanX': '',
		'-TwPanY': '',
		'-TwPinchZoom': '',
		'-TwScrollSnapStrictness': 'proximity',
		'-TwOrdinal': '',
		'-TwSlashedZero': '',
		'-TwNumericFigure': '',
		'-TwNumericSpacing': '',
		'-TwNumericFraction': '',
		'-TwRingInset': '',
		'-TwRingOffsetWidth': '0px',
		'-TwRingOffsetColor': '#fff',
		'-TwRingColor': 'rgb(59 130 246 / 0.5)',
		'-TwRingOffsetShadow': '0 0 #0000',
		'-TwRingShadow': '0 0 #0000',
		'-TwShadow': '0 0 #0000',
		'-TwShadowColored': '0 0 #0000',
		'-TwBlur': '',
		'-TwBrightness': '',
		'-TwContrast': '',
		'-TwGrayscale': '',
		'-TwHueRotate': '',
		'-TwInvert': '',
		'-TwSaturate': '',
		'-TwSepia': '',
		'-TwDropShadow': '',
		'-TwBackdropBlur': '',
		'-TwBackdropBrightness': '',
		'-TwBackdropContrast': '',
		'-TwBackdropGrayscale': '',
		'-TwBackdropHueRotate': '',
		'-TwBackdropInvert': '',
		'-TwBackdropOpacity': '',
		'-TwBackdropSaturate': '',
		'-TwBackdropSepia': '',
	},
	'::backdrop': {
		'-TwBorderSpacingX': '0',
		'-TwBorderSpacingY': '0',
		'-TwTranslateX': '0',
		'-TwTranslateY': '0',
		'-TwRotate': '0',
		'-TwSkewX': '0',
		'-TwSkewY': '0',
		'-TwScaleX': '1',
		'-TwScaleY': '1',
		'-TwPanX': '',
		'-TwPanY': '',
		'-TwPinchZoom': '',
		'-TwScrollSnapStrictness': 'proximity',
		'-TwOrdinal': '',
		'-TwSlashedZero': '',
		'-TwNumericFigure': '',
		'-TwNumericSpacing': '',
		'-TwNumericFraction': '',
		'-TwRingInset': '',
		'-TwRingOffsetWidth': '0px',
		'-TwRingOffsetColor': '#fff',
		'-TwRingColor': 'rgb(59 130 246 / 0.5)',
		'-TwRingOffsetShadow': '0 0 #0000',
		'-TwRingShadow': '0 0 #0000',
		'-TwShadow': '0 0 #0000',
		'-TwShadowColored': '0 0 #0000',
		'-TwBlur': '',
		'-TwBrightness': '',
		'-TwContrast': '',
		'-TwGrayscale': '',
		'-TwHueRotate': '',
		'-TwInvert': '',
		'-TwSaturate': '',
		'-TwSepia': '',
		'-TwDropShadow': '',
		'-TwBackdropBlur': '',
		'-TwBackdropBrightness': '',
		'-TwBackdropContrast': '',
		'-TwBackdropGrayscale': '',
		'-TwBackdropHueRotate': '',
		'-TwBackdropInvert': '',
		'-TwBackdropOpacity': '',
		'-TwBackdropSaturate': '',
		'-TwBackdropSepia': '',
	},
	'.container': { width: '100%' },
	'@media (min-width: 640px)': [
		{ '.container': { maxWidth: '640px' } },
		{
			'.sm\\:inline': { display: 'inline' },
			'.sm\\:hidden': { display: 'none' },
			'.sm\\:w-20': { width: '5rem' },
			'.sm\\:grid-cols-2': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
			'.sm\\:space-x-4 > :not([hidden]) ~ :not([hidden])': {
				'-TwSpaceXReverse': '0',
				marginRight: 'calc(1rem * var(--tw-space-x-reverse))',
				marginLeft: 'calc(1rem * calc(1 - var(--tw-space-x-reverse)))',
			},
		},
	],
	'@media (min-width: 1024px)': [
		{ '.container': { maxWidth: '1024px' } },
		{
			'.lg\\:col-span-2': { gridColumn: 'span 2 / span 2' },
			'.lg\\:col-span-3': { gridColumn: 'span 3 / span 3' },
			'.lg\\:block': { display: 'block' },
			'.lg\\:flex': { display: 'flex' },
			'.lg\\:grid': { display: 'grid' },
			'.lg\\:\\!hidden': { display: 'none !important' },
			'.lg\\:hidden': { display: 'none' },
			'.lg\\:w-auto': { width: 'auto' },
			'.lg\\:w-\\[400px\\]': { width: '400px' },
			'.lg\\:max-w-sm': { maxWidth: '24rem' },
			'.lg\\:max-w-\\[75\\%\\]': { maxWidth: '75%' },
			'.lg\\:grid-cols-4': { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
			'.lg\\:grid-cols-2': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
			'.lg\\:grid-cols-\\[auto_1fr\\]': { gridTemplateColumns: 'auto 1fr' },
			'.lg\\:grid-cols-3': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
			'.lg\\:grid-cols-\\[1fr_auto\\]': { gridTemplateColumns: '1fr auto' },
			'.lg\\:grid-cols-6': { gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' },
			'.lg\\:\\!grid-cols-3': {
				gridTemplateColumns: 'repeat(3, minmax(0, 1fr)) !important',
			},
			'.lg\\:flex-row': { flexDirection: 'row' },
			'.lg\\:items-center': { alignItems: 'center' },
			'.lg\\:gap-8': { gap: '2rem' },
			'.lg\\:\\!space-y-10 > :not([hidden]) ~ :not([hidden])': {
				'-TwSpaceYReverse': '0 !important',
				marginTop:
					'calc(2.5rem * calc(1 - var(--tw-space-y-reverse))) !important',
				marginBottom: 'calc(2.5rem * var(--tw-space-y-reverse)) !important',
			},
			'.lg\\:space-y-0 > :not([hidden]) ~ :not([hidden])': {
				'-TwSpaceYReverse': '0',
				marginTop: 'calc(0px * calc(1 - var(--tw-space-y-reverse)))',
				marginBottom: 'calc(0px * var(--tw-space-y-reverse))',
			},
			'.lg\\:space-x-4 > :not([hidden]) ~ :not([hidden])': {
				'-TwSpaceXReverse': '0',
				marginRight: 'calc(1rem * var(--tw-space-x-reverse))',
				marginLeft: 'calc(1rem * calc(1 - var(--tw-space-x-reverse)))',
			},
		},
	],
	'@media (min-width: 1280px)': [
		{ '.container': { maxWidth: '1280px' } },
		{ '.table tbody td': { paddingTop: '1rem', paddingBottom: '1rem' } },
		{
			'.xl\\:mb-2': { marginBottom: '0.5rem' },
			'.xl\\:grid': { display: 'grid' },
			'.xl\\:grid-cols-5': { gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' },
			'.xl\\:grid-cols-\\[1fr_auto\\]': { gridTemplateColumns: '1fr auto' },
			'.xl\\:grid-cols-2': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
			'.xl\\:flex-col': { flexDirection: 'column' },
			'.xl\\:space-y-0 > :not([hidden]) ~ :not([hidden])': {
				'-TwSpaceYReverse': '0',
				marginTop: 'calc(0px * calc(1 - var(--tw-space-y-reverse)))',
				marginBottom: 'calc(0px * var(--tw-space-y-reverse))',
			},
		},
	],
	'@media (min-width: 1536px)': [
		{ '.container': { maxWidth: '1536px' } },
		{
			'.\\32xl\\:grid-cols-4': {
				gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
			},
		},
	],
	'.badge': {
		display: 'inline-flex',
		alignItems: 'center',
		whiteSpace: 'nowrap',
		fontSize: '0.75rem',
		lineHeight: '1rem',
		fontWeight: '600',
		paddingLeft: '0.5rem',
		paddingRight: '0.5rem',
		paddingTop: '0.25rem',
		paddingBottom: '0.25rem',
		borderRadius: 'var(--theme-rounded-base)',
	},
	'.badge > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceXReverse': '0',
		marginRight: 'calc(0.5rem * var(--tw-space-x-reverse))',
		marginLeft: 'calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))',
	},
	'.badge-icon': {
		display: 'flex',
		height: '1.25rem',
		width: '1.25rem',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '9999px',
		fontSize: '0.75rem',
		lineHeight: '1rem',
		fontWeight: '600',
		'-TwShadow':
			'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
		'-TwShadowColored':
			'0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
	},
	'.badge-filled,\n\t.badge-filled-surface': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-400) / var(--tw-bg-opacity))',
	},
	'.dark .badge-filled,.dark \n\t.badge-filled-surface': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-500) / var(--tw-bg-opacity))',
	},
	'.badge-filled-primary': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-primary-500) / var(--tw-bg-opacity))',
		color: 'var(--on-primary)',
	},
	'.badge-filled-accent': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-accent-500) / var(--tw-bg-opacity))',
		color: 'var(--on-accent)',
	},
	'.badge-filled-tertiary': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-tertiary-500) / var(--tw-bg-opacity))',
		color: 'var(--on-tertiary)',
	},
	'.badge-filled-warning': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-warning-500) / var(--tw-bg-opacity))',
		color: 'var(--on-warning)',
	},
	'.badge-glass': {
		backgroundColor: 'rgb(var(--color-accent-500) / 0.1)',
		'-TwBackdropBlur': 'blur(16px)',
		WebkitBackdropFilter:
			'var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)',
		backdropFilter:
			'var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)',
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingColor': 'rgb(23 23 23 / 0.05)',
	},
	'.dark .badge-glass': {
		backgroundColor: 'rgb(var(--color-accent-500) / 0.1)',
		'-TwRingColor': 'rgb(250 250 250 / 0.05)',
	},
	'button:disabled': {
		cursor: 'not-allowed !important',
		opacity: '0.5 !important',
	},
	'button:disabled:hover': {
		'-TwBrightness': 'brightness(1)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'button:disabled:active': {
		'-TwScaleX': '1',
		'-TwScaleY': '1',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.btn': {
		paddingLeft: '1.25rem',
		paddingRight: '1.25rem',
		paddingTop: '9px',
		paddingBottom: '9px',
		fontSize: '1rem',
		lineHeight: '1.5rem',
		whiteSpace: 'nowrap',
		textAlign: 'center',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		transitionProperty: 'all',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionDuration: '150ms',
		borderRadius: 'var(--theme-rounded-base)',
	},
	'.btn > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceXReverse': '0',
		marginRight: 'calc(0.5rem * var(--tw-space-x-reverse))',
		marginLeft: 'calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))',
	},
	'.btn:hover': {
		'-TwBrightness': 'brightness(1.1)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'.btn:active': {
		'-TwScaleX': '.9',
		'-TwScaleY': '.9',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.btn-sm': {
		paddingLeft: '0.75rem',
		paddingRight: '0.75rem',
		paddingTop: '0.375rem',
		paddingBottom: '0.375rem',
		fontSize: '0.875rem',
		lineHeight: '1.25rem',
	},
	'.btn-base': {
		paddingLeft: '1.25rem',
		paddingRight: '1.25rem',
		paddingTop: '9px',
		paddingBottom: '9px',
		fontSize: '1rem',
		lineHeight: '1.5rem',
	},
	'.btn-lg': {
		paddingLeft: '1.75rem',
		paddingRight: '1.75rem',
		paddingTop: '0.75rem',
		paddingBottom: '0.75rem',
		fontSize: '1.125rem',
		lineHeight: '1.75rem',
	},
	'.btn-xl': {
		paddingLeft: '2.25rem',
		paddingRight: '2.25rem',
		paddingTop: '1rem',
		paddingBottom: '1rem',
		fontSize: '1.25rem',
		lineHeight: '1.75rem',
	},
	'.btn-icon': {
		paddingLeft: '1.25rem',
		paddingRight: '1.25rem',
		paddingTop: '9px',
		paddingBottom: '9px',
		fontSize: ['1rem', '1rem'],
		lineHeight: ['1.5rem', '1.5rem'],
		whiteSpace: 'nowrap',
		textAlign: 'center',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		transitionProperty: 'all',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionDuration: '150ms',
		borderRadius: ['var(--theme-rounded-base)', '9999px'],
		aspectRatio: '1 / 1',
		width: '43px',
	},
	'.btn-icon > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceXReverse': '0',
		marginRight: 'calc(0.5rem * var(--tw-space-x-reverse))',
		marginLeft: 'calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))',
	},
	'.btn-icon:hover': {
		'-TwBrightness': 'brightness(1.1)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'.btn-icon:active': {
		'-TwScaleX': '.9',
		'-TwScaleY': '.9',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.btn-icon-sm': {
		aspectRatio: '1 / 1',
		width: '33px',
		fontSize: '0.875rem',
		lineHeight: '1.25rem',
	},
	'.btn-filled': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-900) / var(--tw-bg-opacity))',
		'-TwTextOpacity': '1',
		color: 'rgb(255 255 255 / var(--tw-text-opacity))',
	},
	'.dark .btn-filled': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-50) / var(--tw-bg-opacity))',
		'-TwTextOpacity': '1',
		color: 'rgb(0 0 0 / var(--tw-text-opacity))',
	},
	'.btn-filled-primary': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-primary-500) / var(--tw-bg-opacity))',
		color: 'var(--on-primary)',
	},
	'.btn-filled-accent': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-accent-500) / var(--tw-bg-opacity))',
		color: 'var(--on-accent)',
	},
	'.btn-filled-tertiary': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-tertiary-500) / var(--tw-bg-opacity))',
		color: 'var(--on-tertiary)',
	},
	'.btn-filled-warning': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-warning-500) / var(--tw-bg-opacity))',
		color: 'var(--on-warning)',
	},
	'.btn-filled-surface': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-400) / var(--tw-bg-opacity))',
	},
	'.dark .btn-filled-surface': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-500) / var(--tw-bg-opacity))',
	},
	'.btn-ringed': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-surface-900) / var(--tw-ring-opacity))',
	},
	'.dark .btn-ringed': {
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-surface-50) / var(--tw-ring-opacity))',
	},
	'.btn-ringed-primary': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-primary-500) / var(--tw-ring-opacity))',
	},
	'.btn-ringed-accent': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-accent-500) / var(--tw-ring-opacity))',
	},
	'.btn-ringed-tertiary': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-tertiary-500) / var(--tw-ring-opacity))',
	},
	'.btn-ringed-warning': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-warning-500) / var(--tw-ring-opacity))',
	},
	'.btn-ringed-surface': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-surface-400) / var(--tw-ring-opacity))',
	},
	'.dark .btn-ringed-surface': {
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-surface-500) / var(--tw-ring-opacity))',
	},
	'.btn-ghost': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-surface-900) / var(--tw-ring-opacity))',
		backgroundColor: 'rgb(var(--color-surface-900) / 0.2)',
	},
	'.dark .btn-ghost': {
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-surface-50) / var(--tw-ring-opacity))',
		backgroundColor: 'rgb(var(--color-surface-50) / 0.2)',
	},
	'.btn-ghost:hover': {
		backgroundColor: 'rgb(var(--color-surface-900) / 0.1)',
	},
	'.dark .btn-ghost:hover': {
		backgroundColor: 'rgb(var(--color-surface-50) / 0.3)',
	},
	'.btn-ghost-primary': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-primary-500) / var(--tw-ring-opacity))',
		backgroundColor: 'rgb(var(--color-primary-500) / 0.2)',
	},
	'.btn-ghost-primary:hover': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.3)',
	},
	'.btn-ghost-accent': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-accent-500) / var(--tw-ring-opacity))',
		backgroundColor: 'rgb(var(--color-accent-500) / 0.2)',
	},
	'.btn-ghost-accent:hover': {
		backgroundColor: 'rgb(var(--color-accent-500) / 0.3)',
	},
	'.btn-ghost-tertiary': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-tertiary-500) / var(--tw-ring-opacity))',
		backgroundColor: 'rgb(var(--color-tertiary-500) / 0.2)',
	},
	'.btn-ghost-tertiary:hover': {
		backgroundColor: 'rgb(var(--color-tertiary-500) / 0.3)',
	},
	'.btn-ghost-warning': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-warning-500) / var(--tw-ring-opacity))',
		backgroundColor: 'rgb(var(--color-warning-500) / 0.2)',
	},
	'.btn-ghost-warning:hover': {
		backgroundColor: 'rgb(var(--color-warning-500) / 0.3)',
	},
	'.btn-ghost-surface': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-surface-400) / var(--tw-ring-opacity))',
		backgroundColor: 'rgb(var(--color-surface-400) / 0.2)',
	},
	'.dark .btn-ghost-surface': {
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-surface-500) / var(--tw-ring-opacity))',
	},
	'.btn-ghost-surface:hover': {
		backgroundColor: 'rgb(var(--color-surface-500) / 0.3)',
	},
	"input[type='file']:not(.file-dropzone-input)::file-selector-button": {
		paddingLeft: ['1.25rem', '0.75rem'],
		paddingRight: ['1.25rem', '0.75rem'],
		paddingTop: ['9px', '0.375rem'],
		paddingBottom: ['9px', '0.375rem'],
		fontSize: ['1rem', '0.875rem'],
		lineHeight: ['1.5rem', '1.25rem'],
		whiteSpace: 'nowrap',
		textAlign: 'center',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		transitionProperty: 'all',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionDuration: '150ms',
		borderRadius: 'var(--theme-rounded-base)',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-accent-500) / var(--tw-bg-opacity))',
		color: ['var(--on-accent)', 'rgba(var(--theme-font-color-base))'],
		marginRight: '0.5rem',
		borderWidth: '0px',
	},
	"input[type='file']:not(.file-dropzone-input)::file-selector-button > :not([hidden]) ~ :not([hidden])":
		{
			'-TwSpaceXReverse': '0',
			marginRight: 'calc(0.5rem * var(--tw-space-x-reverse))',
			marginLeft: 'calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))',
		},
	"input[type='file']:not(.file-dropzone-input)::file-selector-button:hover": {
		'-TwBrightness': 'brightness(1.1)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	"input[type='file']:not(.file-dropzone-input)::file-selector-button:active": {
		'-TwScaleX': '.9',
		'-TwScaleY': '.9',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	".dark input[type='file']:not(.file-dropzone-input)::file-selector-button": {
		color: 'rgba(var(--theme-font-color-dark))',
	},
	'.card': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-100) / var(--tw-bg-opacity))',
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingColor': 'rgb(23 23 23 / 0.05)',
		borderRadius: 'var(--theme-rounded-container)',
	},
	'.dark .card': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-800) / var(--tw-bg-opacity))',
		'-TwRingColor': 'rgb(250 250 250 / 0.05)',
	},
	'.card-header': { padding: '1rem', paddingBottom: '0px' },
	'.card-footer': { padding: '1rem', paddingTop: '0px' },
	'a.card': {
		transitionProperty: 'all',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionDuration: '150ms',
	},
	'a.card:hover': {
		'-TwBrightness': 'brightness(1.1)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'.card-glass': {
		backgroundColor: 'rgb(var(--color-accent-500) / 0.1)',
		'-TwBackdropBlur': 'blur(16px)',
		WebkitBackdropFilter:
			'var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)',
		backdropFilter:
			'var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)',
	},
	'.dark .card-glass': {
		backgroundColor: 'rgb(var(--color-accent-500) / 0.1)',
	},
	'.chip': {
		display: 'inline-flex',
		alignItems: 'center',
		whiteSpace: 'nowrap',
		fontSize: '0.75rem',
		lineHeight: '1rem',
		'-TwTextOpacity': '1',
		color: 'rgb(0 0 0 / var(--tw-text-opacity))',
		paddingLeft: '0.5rem',
		paddingRight: '0.5rem',
		paddingTop: '0.25rem',
		paddingBottom: '0.25rem',
		borderRadius: '0.25rem',
		borderWidth: '1px',
		backgroundColor: 'rgb(var(--color-primary-500) / 0.1)',
		'-TwBackdropBlur': 'blur(16px)',
		WebkitBackdropFilter:
			'var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)',
		backdropFilter:
			'var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)',
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-primary-600) / var(--tw-border-opacity))',
	},
	'.chip > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceXReverse': '0',
		marginRight: 'calc(0.5rem * var(--tw-space-x-reverse))',
		marginLeft: 'calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))',
	},
	'.dark .chip': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-primary-400) / var(--tw-text-opacity))',
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-primary-300) / var(--tw-border-opacity))',
	},
	'.chip:hover': { backgroundColor: 'rgb(var(--color-primary-500) / 0.3)' },
	'.list,\n\t.list-dl,\n\t.list-nav ul': { listStyleType: 'none' },
	'.list > :not([hidden]) ~ :not([hidden]),\n\t.list-dl > :not([hidden]) ~ :not([hidden]),\n\t.list-nav ul > :not([hidden]) ~ :not([hidden])':
		{
			'-TwSpaceYReverse': '0',
			marginTop: 'calc(0.25rem * calc(1 - var(--tw-space-y-reverse)))',
			marginBottom: 'calc(0.25rem * var(--tw-space-y-reverse))',
		},
	'.list li': {
		display: 'flex',
		alignItems: 'center',
		whiteSpace: 'nowrap',
		paddingLeft: '1rem',
		paddingRight: '1rem',
		paddingTop: '0.75rem',
		paddingBottom: '0.75rem',
		borderRadius: 'var(--theme-rounded-base)',
	},
	'.list li > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceXReverse': '0',
		marginRight: 'calc(1rem * var(--tw-space-x-reverse))',
		marginLeft: 'calc(1rem * calc(1 - var(--tw-space-x-reverse)))',
	},
	'.list-dl div': {
		display: 'flex',
		alignItems: 'center',
		whiteSpace: 'nowrap',
		paddingLeft: '1rem',
		paddingRight: '1rem',
		paddingTop: '0.75rem',
		paddingBottom: '0.75rem',
		borderRadius: 'var(--theme-rounded-base)',
	},
	'.list-dl div > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceXReverse': '0',
		marginRight: 'calc(1rem * var(--tw-space-x-reverse))',
		marginLeft: 'calc(1rem * calc(1 - var(--tw-space-x-reverse)))',
	},
	'.list-nav a,\n\t.list-nav .option': {
		display: 'flex',
		alignItems: 'center',
		whiteSpace: 'nowrap',
		paddingLeft: '1rem',
		paddingRight: '1rem',
		paddingTop: '0.75rem',
		paddingBottom: '0.75rem',
		cursor: 'pointer',
		borderRadius: 'var(--theme-rounded-base)',
	},
	'.list-nav a > :not([hidden]) ~ :not([hidden]),\n\t.list-nav .option > :not([hidden]) ~ :not([hidden])':
		{
			'-TwSpaceXReverse': '0',
			marginRight: 'calc(1rem * var(--tw-space-x-reverse))',
			marginLeft: 'calc(1rem * calc(1 - var(--tw-space-x-reverse)))',
		},
	'.list-nav a:hover,\n\t.list-nav .option:hover': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.1)',
	},
	'.logo-cloud': {
		display: 'grid',
		overflow: 'hidden',
		borderRadius: 'var(--theme-rounded-container)',
	},
	'.logo-item': {
		'@apply: flex-auto text-center space-x-4 shadow': true,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-100) / var(--tw-bg-opacity))',
		fontSize: '1rem',
		lineHeight: '1.5rem',
		fontWeight: '700',
		'-TwTextOpacity': '1',
		color: 'rgb(0 0 0 / var(--tw-text-opacity))',
		paddingTop: '1rem',
		paddingBottom: '1rem',
	},
	'.logo-item > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceXReverse': '0',
		marginRight: 'calc(1rem * var(--tw-space-x-reverse))',
		marginLeft: 'calc(1rem * calc(1 - var(--tw-space-x-reverse)))',
	},
	'.dark .logo-item': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-800) / var(--tw-bg-opacity))',
		'-TwTextOpacity': '1',
		color: 'rgb(255 255 255 / var(--tw-text-opacity))',
	},
	'a.logo-item:hover': {
		'-TwBrightness': 'brightness(1.1)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'.placeholder': {
		height: '1.25rem',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-300) / var(--tw-bg-opacity))',
		borderRadius: 'var(--theme-rounded-base)',
	},
	'.dark .placeholder': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-600) / var(--tw-bg-opacity))',
	},
	'.placeholder-circle': {
		aspectRatio: '1 / 1',
		borderRadius: '9999px',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-300) / var(--tw-bg-opacity))',
	},
	'.dark .placeholder-circle': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-600) / var(--tw-bg-opacity))',
	},
	'.table-container': {
		width: '100%',
		overflowX: 'auto',
		borderRadius: 'var(--theme-rounded-container)',
	},
	'.table': {
		width: '100%',
		tableLayout: 'auto',
		overflow: 'hidden',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-100) / var(--tw-bg-opacity))',
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingColor': 'rgb(23 23 23 / 0.05)',
		borderRadius: 'var(--theme-rounded-container)',
		display: 'table',
	},
	'.dark .table': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-800) / var(--tw-bg-opacity))',
		'-TwRingColor': 'rgb(250 250 250 / 0.05)',
	},
	'.table-hover tbody tr:hover': {
		backgroundColor: 'rgb(var(--color-surface-500) / 0.2)',
	},
	'.table-hover tbody tr:hover:nth-child(even)': {
		backgroundColor: 'rgb(var(--color-surface-500) / 0.2)',
	},
	'.table-interactive tbody tr': { cursor: 'pointer' },
	'.table-interactive tbody tr:hover:hover': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.1)',
	},
	'.table-interactive tbody tr:hover:nth-child(even):hover': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.1)',
	},
	'[data-sort]': { cursor: 'pointer' },
	'[data-sort]:hover:hover': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.1)',
	},
	'.table-sort-asc::after': {
		marginLeft: '0.5rem',
		opacity: '0.5',
		'-TwContent': "'↓' !important",
		content: 'var(--tw-content) !important',
	},
	'.table-sort-dsc::after': {
		marginLeft: '0.5rem',
		opacity: '0.5',
		'-TwContent': "'↑' !important",
		content: 'var(--tw-content) !important',
	},
	'.table thead': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-200) / var(--tw-bg-opacity))',
	},
	'.dark .table thead': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-700) / var(--tw-bg-opacity))',
	},
	'.table thead tr': { textAlign: 'left', textTransform: 'capitalize' },
	'.table thead th': { padding: '1rem', fontWeight: '700' },
	'.table tbody tr': {
		borderBottomWidth: '1px',
		borderColor: 'rgb(var(--color-surface-500) / 0.3)',
	},
	'.table tbody tr:nth-child(even)': {
		backgroundColor: 'rgb(var(--color-surface-500) / 0.05)',
	},
	'.table tbody td': {
		whiteSpace: 'nowrap',
		padding: '1rem',
		paddingTop: '0.5rem',
		paddingBottom: '0.5rem',
		fontSize: '0.875rem',
		lineHeight: '1.25rem',
	},
	".table tbody td input[type='checkbox']": {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingColor': 'rgb(255 255 255 / 0.2)',
	},
	'.table tfoot': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-100) / var(--tw-bg-opacity))',
	},
	'.dark .table tfoot': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-800) / var(--tw-bg-opacity))',
	},
	'.table tfoot tr': { textAlign: 'left', textTransform: 'capitalize' },
	'.table tfoot th,\n\t.table tfoot td': { padding: '1rem' },
	'.table-row-checked': {
		backgroundColor: 'rgb(var(--color-accent-500) / 0.3) !important',
	},
	'.table-cell-fit': { width: '1%', whiteSpace: 'nowrap' },
	'.menu-tl': {
		left: '0px',
		marginTop: 'var(--menu-offset)',
		transformOrigin: 'top left',
	},
	'.menu-tr': {
		right: '0px',
		marginTop: 'var(--menu-offset)',
		transformOrigin: 'top right',
	},
	'.menu-bl': {
		top: '0px',
		left: '0px',
		transformOrigin: 'bottom left',
		'-TwTranslateY': 'calc(calc(100% + var(--menu-offset)) * -1)',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.menu-br': {
		top: '0px',
		right: '0px',
		transformOrigin: 'bottom right',
		'-TwTranslateY': 'calc(calc(100% + var(--menu-offset)) * -1)',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.sr-only': {
		position: 'absolute',
		width: '1px',
		height: '1px',
		padding: '0',
		margin: '-1px',
		overflow: 'hidden',
		clip: 'rect(0, 0, 0, 0)',
		whiteSpace: 'nowrap',
		borderWidth: '0',
	},
	'.\\!pointer-events-none': { pointerEvents: 'none !important' },
	'.pointer-events-none': { pointerEvents: 'none' },
	'.pointer-events-auto': { pointerEvents: 'auto' },
	'.visible': { visibility: 'visible' },
	'.\\!visible': { visibility: 'visible !important' },
	'.collapse': { visibility: 'collapse' },
	'.static': { position: 'static' },
	'.fixed': { position: 'fixed' },
	'.absolute': { position: 'absolute' },
	'.relative': { position: 'relative' },
	'.sticky': { position: 'sticky' },
	'.top-0': { top: '0px' },
	'.left-0': { left: '0px' },
	'.right-0': { right: '0px' },
	'.bottom-0': { bottom: '0px' },
	'.-top-4': { top: '-1rem' },
	'.-right-4': { right: '-1rem' },
	'.-top-3': { top: '-0.75rem' },
	'.-top-1': { top: '-0.25rem' },
	'.-right-1': { right: '-0.25rem' },
	'.top-2': { top: '0.5rem' },
	'.right-2': { right: '0.5rem' },
	'.isolate': { isolation: 'isolate' },
	'.z-\\[-1\\]': { zIndex: '-1' },
	'.z-10': { zIndex: '10' },
	'.z-\\[1\\]': { zIndex: '1' },
	'.z-40': { zIndex: '40' },
	'.z-\\[999\\]': { zIndex: '999' },
	'.z-\\[888\\]': { zIndex: '888' },
	'.col-span-2': { gridColumn: 'span 2 / span 2' },
	'.m-2': { margin: '0.5rem' },
	'.m-0': { margin: '0px' },
	'.mx-auto': { marginLeft: 'auto', marginRight: 'auto' },
	'.mx-2': { marginLeft: '0.5rem', marginRight: '0.5rem' },
	'.\\!my-6': {
		marginTop: '1.5rem !important',
		marginBottom: '1.5rem !important',
	},
	'.my-10': { marginTop: '2.5rem', marginBottom: '2.5rem' },
	'.mr-4': { marginRight: '1rem' },
	'.mr-2': { marginRight: '0.5rem' },
	'.ml-2': { marginLeft: '0.5rem' },
	'.\\!mr-1': { marginRight: '0.25rem !important' },
	'.mr-1': { marginRight: '0.25rem' },
	'.mt-2': { marginTop: '0.5rem' },
	'.mb-2': { marginBottom: '0.5rem' },
	'.ml-3': { marginLeft: '0.75rem' },
	'.ml-1': { marginLeft: '0.25rem' },
	'.mb-28': { marginBottom: '7rem' },
	'.-ml-0': { marginLeft: '-0px' },
	'.mb-4': { marginBottom: '1rem' },
	'.mb-3': { marginBottom: '0.75rem' },
	'.block': { display: 'block' },
	'.\\!block': { display: 'block !important' },
	'.inline-block': { display: 'inline-block' },
	'.inline': { display: 'inline' },
	'.flex': { display: 'flex' },
	'.\\!flex': { display: 'flex !important' },
	'.inline-flex': { display: 'inline-flex' },
	'.grid': { display: 'grid' },
	'.contents': { display: 'contents' },
	'.hidden': { display: 'none' },
	'.aspect-square': { aspectRatio: '1 / 1' },
	'.aspect-video': { aspectRatio: '16 / 9' },
	'.aspect-\\[21\\/9\\]': { aspectRatio: '21/9' },
	'.h-full': { height: '100%' },
	'.h-\\[56px\\]': { height: '56px' },
	'.h-10': { height: '2.5rem' },
	'.h-8': { height: '2rem' },
	'.h-\\[32px\\]': { height: '32px' },
	'.h-4': { height: '1rem' },
	'.h-64': { height: '16rem' },
	'.h-6': { height: '1.5rem' },
	'.h-5': { height: '1.25rem' },
	'.h-0': { height: '0px' },
	'.h-24': { height: '6rem' },
	'.h-auto': { height: 'auto' },
	'.h-2': { height: '0.5rem' },
	'.h-1': { height: '0.25rem' },
	'.h-\\[40\\%\\]': { height: '40%' },
	'.h-20': { height: '5rem' },
	'.h-\\[480px\\]': { height: '480px' },
	'.h-14': { height: '3.5rem' },
	'.max-h-64': { maxHeight: '16rem' },
	'.max-h-\\[60vh\\]': { maxHeight: '60vh' },
	'.max-h-\\[200px\\]': { maxHeight: '200px' },
	'.min-h-\\[24px\\]': { minHeight: '24px' },
	'.min-h-\\[100px\\]': { minHeight: '100px' },
	'.w-full': { width: '100%' },
	'.w-0': { width: '0px' },
	'.w-\\[360px\\]': { width: '360px' },
	'.w-20': { width: '5rem' },
	'.w-10': { width: '2.5rem' },
	'.w-8': { width: '2rem' },
	'.w-32': { width: '8rem' },
	'.w-4': { width: '1rem' },
	'.w-60': { width: '15rem' },
	'.w-56': { width: '14rem' },
	'.w-64': { width: '16rem' },
	'.w-6': { width: '1.5rem' },
	'.w-5': { width: '1.25rem' },
	'.w-3': { width: '0.75rem' },
	'.w-\\[70px\\]': { width: '70px' },
	'.w-auto': { width: 'auto' },
	'.w-12': { width: '3rem' },
	'.w-2': { width: '0.5rem' },
	'.w-\\[50\\%\\]': { width: '50%' },
	'.w-16': { width: '4rem' },
	'.w-1': { width: '0.25rem' },
	'.w-\\[90\\%\\]': { width: '90%' },
	'.w-48': { width: '12rem' },
	'.w-24': { width: '6rem' },
	'.w-\\[40px\\]': { width: '40px' },
	'.w-14': { width: '3.5rem' },
	'.w-40': { width: '10rem' },
	'.\\!w-\\[480px\\]': { width: '480px !important' },
	'.\\!w-56': { width: '14rem !important' },
	'.max-w-\\[1200px\\]': { maxWidth: '1200px' },
	'.max-w-\\[50px\\]': { maxWidth: '50px' },
	'.max-w-\\[480px\\]': { maxWidth: '480px' },
	'.max-w-\\[640px\\]': { maxWidth: '640px' },
	'.max-w-\\[200px\\]': { maxWidth: '200px' },
	'.max-w-sm': { maxWidth: '24rem' },
	'.max-w-lg': { maxWidth: '32rem' },
	'.\\!max-w-\\[75\\%\\]': { maxWidth: '75% !important' },
	'.max-w-\\[220px\\]': { maxWidth: '220px' },
	'.flex-auto': { flex: '1 1 auto' },
	'.flex-none': { flex: 'none' },
	'.flex-1': { flex: '1 1 0%' },
	'.origin-\\[50\\%_50\\%\\]': { transformOrigin: '50% 50%' },
	'.translate-y-1': {
		'-TwTranslateY': '0.25rem',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.-translate-y-0\\.5': {
		'-TwTranslateY': '-0.125rem',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.-translate-y-0': {
		'-TwTranslateY': '-0px',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.translate-x-full': {
		'-TwTranslateX': '100%',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.translate-x-0': {
		'-TwTranslateX': '0px',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.-translate-y-\\[2px\\]': {
		'-TwTranslateY': '-2px',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.-translate-y-1': {
		'-TwTranslateY': '-0.25rem',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.-rotate-180': {
		'-TwRotate': '-180deg',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.-rotate-90': {
		'-TwRotate': '-90deg',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.scale-\\[0\\.7\\]': {
		'-TwScaleX': '0.7',
		'-TwScaleY': '0.7',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.scale-90': {
		'-TwScaleX': '.9',
		'-TwScaleY': '.9',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.-scale-x-\\[100\\%\\]': {
		'-TwScaleX': '-100%',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.transform': {
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'@keyframes spin': { to: { transform: 'rotate(360deg)' } },
	'.animate-spin': { animation: 'spin 1s linear infinite' },
	'@keyframes bounce': {
		'0%, 100%': {
			transform: 'translateY(-25%)',
			animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
		},
		'50%': {
			transform: 'none',
			animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
		},
	},
	'.animate-bounce': { animation: 'bounce 1s infinite' },
	'@keyframes pulse': { '50%': { opacity: '.5' } },
	'.animate-pulse': {
		animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
	},
	'.cursor-pointer': { cursor: 'pointer' },
	'.cursor-not-allowed': { cursor: 'not-allowed' },
	'.resize': { resize: 'both' },
	'.list-inside': { listStylePosition: 'inside' },
	'.list-none': { listStyleType: 'none' },
	'.list-disc': { listStyleType: 'disc' },
	'.list-decimal': { listStyleType: 'decimal' },
	'.grid-cols-1': { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
	'.grid-cols-\\[auto_1fr\\]': { gridTemplateColumns: 'auto 1fr' },
	'.grid-cols-\\[auto_auto_auto\\]': { gridTemplateColumns: 'auto auto auto' },
	'.grid-cols-10': { gridTemplateColumns: 'repeat(10, minmax(0, 1fr))' },
	'.grid-cols-\\[32px_1fr\\]': { gridTemplateColumns: '32px 1fr' },
	'.grid-cols-2': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
	'.grid-cols-\\[1fr_auto\\]': { gridTemplateColumns: '1fr auto' },
	'.grid-cols-3': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
	'.grid-cols-4': { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
	'.grid-cols-\\[64px_1fr_auto\\]': { gridTemplateColumns: '64px 1fr auto' },
	'.grid-rows-\\[auto_1fr_auto\\]': { gridTemplateRows: 'auto 1fr auto' },
	'.grid-rows-\\[1fr_auto\\]': { gridTemplateRows: '1fr auto' },
	'.flex-row': { flexDirection: 'row' },
	'.flex-col': { flexDirection: 'column' },
	'.flex-col-reverse': { flexDirection: 'column-reverse' },
	'.flex-wrap': { flexWrap: 'wrap' },
	'.place-content-center': { placeContent: 'center' },
	'.place-items-center': { placeItems: 'center' },
	'.items-start': { alignItems: 'flex-start' },
	'.items-end': { alignItems: 'flex-end' },
	'.items-center': { alignItems: 'center' },
	'.justify-start': { justifyContent: 'flex-start' },
	'.justify-end': { justifyContent: 'flex-end' },
	'.justify-center': { justifyContent: 'center' },
	'.justify-between': { justifyContent: 'space-between' },
	'.gap-10': { gap: '2.5rem' },
	'.gap-4': { gap: '1rem' },
	'.gap-2': { gap: '0.5rem' },
	'.gap-3': { gap: '0.75rem' },
	'.gap-0': { gap: '0px' },
	'.gap-5': { gap: '1.25rem' },
	'.gap-1': { gap: '0.25rem' },
	'.space-y-4 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceYReverse': '0',
		marginTop: 'calc(1rem * calc(1 - var(--tw-space-y-reverse)))',
		marginBottom: 'calc(1rem * var(--tw-space-y-reverse))',
	},
	'.space-x-4 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceXReverse': '0',
		marginRight: 'calc(1rem * var(--tw-space-x-reverse))',
		marginLeft: 'calc(1rem * calc(1 - var(--tw-space-x-reverse)))',
	},
	'.space-y-20 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceYReverse': '0',
		marginTop: 'calc(5rem * calc(1 - var(--tw-space-y-reverse)))',
		marginBottom: 'calc(5rem * var(--tw-space-y-reverse))',
	},
	'.space-y-6 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceYReverse': '0',
		marginTop: 'calc(1.5rem * calc(1 - var(--tw-space-y-reverse)))',
		marginBottom: 'calc(1.5rem * var(--tw-space-y-reverse))',
	},
	'.space-x-2 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceXReverse': '0',
		marginRight: 'calc(0.5rem * var(--tw-space-x-reverse))',
		marginLeft: 'calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))',
	},
	'.space-y-10 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceYReverse': '0',
		marginTop: 'calc(2.5rem * calc(1 - var(--tw-space-y-reverse)))',
		marginBottom: 'calc(2.5rem * var(--tw-space-y-reverse))',
	},
	'.space-y-5 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceYReverse': '0',
		marginTop: 'calc(1.25rem * calc(1 - var(--tw-space-y-reverse)))',
		marginBottom: 'calc(1.25rem * var(--tw-space-y-reverse))',
	},
	'.space-y-2 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceYReverse': '0',
		marginTop: 'calc(0.5rem * calc(1 - var(--tw-space-y-reverse)))',
		marginBottom: 'calc(0.5rem * var(--tw-space-y-reverse))',
	},
	'.space-y-8 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceYReverse': '0',
		marginTop: 'calc(2rem * calc(1 - var(--tw-space-y-reverse)))',
		marginBottom: 'calc(2rem * var(--tw-space-y-reverse))',
	},
	'.space-y-1\\.5 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceYReverse': '0',
		marginTop: 'calc(0.375rem * calc(1 - var(--tw-space-y-reverse)))',
		marginBottom: 'calc(0.375rem * var(--tw-space-y-reverse))',
	},
	'.space-y-1 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceYReverse': '0',
		marginTop: 'calc(0.25rem * calc(1 - var(--tw-space-y-reverse)))',
		marginBottom: 'calc(0.25rem * var(--tw-space-y-reverse))',
	},
	'.space-y-0 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceYReverse': '0',
		marginTop: 'calc(0px * calc(1 - var(--tw-space-y-reverse)))',
		marginBottom: 'calc(0px * var(--tw-space-y-reverse))',
	},
	'.space-x-1 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceXReverse': '0',
		marginRight: 'calc(0.25rem * var(--tw-space-x-reverse))',
		marginLeft: 'calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))',
	},
	'.space-x-6 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceXReverse': '0',
		marginRight: 'calc(1.5rem * var(--tw-space-x-reverse))',
		marginLeft: 'calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))',
	},
	'.\\!space-x-6 > :not([hidden]) ~ :not([hidden])': {
		'-TwSpaceXReverse': '0 !important',
		marginRight: 'calc(1.5rem * var(--tw-space-x-reverse)) !important',
		marginLeft: 'calc(1.5rem * calc(1 - var(--tw-space-x-reverse))) !important',
	},
	'.place-self-end': { placeSelf: 'end' },
	'.place-self-center': { placeSelf: 'center' },
	'.overflow-auto': { overflow: 'auto' },
	'.overflow-hidden': { overflow: 'hidden' },
	'.overflow-x-auto': { overflowX: 'auto' },
	'.overflow-y-auto': { overflowY: 'auto' },
	'.overflow-x-hidden': { overflowX: 'hidden' },
	'.whitespace-nowrap': { whiteSpace: 'nowrap' },
	'.whitespace-pre-wrap': { whiteSpace: 'pre-wrap' },
	'.break-all': { wordBreak: 'break-all' },
	'.rounded-full': { borderRadius: '9999px' },
	'.rounded': { borderRadius: '0.25rem' },
	'.rounded-none': { borderRadius: '0px' },
	'.rounded-lg': { borderRadius: '0.5rem' },
	'.rounded-xl': { borderRadius: '0.75rem' },
	'.rounded-3xl': { borderRadius: '1.5rem' },
	'.rounded-\\[corner\\]': { borderRadius: 'corner' },
	'.border': { borderWidth: '1px' },
	'.\\!border-2': { borderWidth: '2px !important' },
	'.border-0': { borderWidth: '0px' },
	'.border-4': { borderWidth: '4px' },
	'.border-2': { borderWidth: '2px' },
	'.border-b': { borderBottomWidth: '1px' },
	'.border-l-2': { borderLeftWidth: '2px' },
	'.border-r': { borderRightWidth: '1px' },
	'.border-t': { borderTopWidth: '1px' },
	'.border-t-2': { borderTopWidth: '2px' },
	'.border-b-2': { borderBottomWidth: '2px' },
	'.border-l': { borderLeftWidth: '1px' },
	'.border-t-4': { borderTopWidth: '4px' },
	'.border-t-8': { borderTopWidth: '8px' },
	'.border-l-4': { borderLeftWidth: '4px' },
	'.border-l-8': { borderLeftWidth: '8px' },
	'.border-solid': { borderStyle: 'solid' },
	'.border-dashed': { borderStyle: 'dashed' },
	'.border-dotted': { borderStyle: 'dotted' },
	'.border-double': { borderStyle: 'double' },
	'.border-none': { borderStyle: 'none' },
	'.border-black\\/5': { borderColor: 'rgb(0 0 0 / 0.05)' },
	'.border-tertiary-500': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-tertiary-500) / var(--tw-border-opacity))',
	},
	'.border-accent-500': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-accent-500) / var(--tw-border-opacity))',
	},
	'.border-surface-300': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-surface-300) / var(--tw-border-opacity))',
	},
	'.border-transparent': { borderColor: 'transparent' },
	'.border-primary-500': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-primary-500) / var(--tw-border-opacity))',
	},
	'.border-surface-500': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-surface-500) / var(--tw-border-opacity))',
	},
	'.border-warning-500': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-warning-500) / var(--tw-border-opacity))',
	},
	'.border-red-500': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(239 68 68 / var(--tw-border-opacity))',
	},
	'.border-green-500': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(34 197 94 / var(--tw-border-opacity))',
	},
	'.border-blue-500': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(59 130 246 / var(--tw-border-opacity))',
	},
	'.border-gray-200': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(229 231 235 / var(--tw-border-opacity))',
	},
	'.border-surface-200': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-surface-200) / var(--tw-border-opacity))',
	},
	'.border-primary-500\\/50': {
		borderColor: 'rgb(var(--color-primary-500) / 0.5)',
	},
	'.border-l-primary-500': {
		'-TwBorderOpacity': '1',
		borderLeftColor: 'rgb(var(--color-primary-500) / var(--tw-border-opacity))',
	},
	'.bg-black\\/5': { backgroundColor: 'rgb(0 0 0 / 0.05)' },
	'.bg-black': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(0 0 0 / var(--tw-bg-opacity))',
	},
	'.bg-orange-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(249 115 22 / var(--tw-bg-opacity))',
	},
	'.bg-sky-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(14 165 233 / var(--tw-bg-opacity))',
	},
	'.bg-primary-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-primary-500) / var(--tw-bg-opacity))',
	},
	'.bg-accent-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-accent-500) / var(--tw-bg-opacity))',
	},
	'.bg-\\[\\#7289da\\]': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(114 137 218 / var(--tw-bg-opacity))',
	},
	'.bg-\\[\\#1da1f2\\]': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(29 161 242 / var(--tw-bg-opacity))',
	},
	'.bg-\\[\\#6e5494\\]': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(110 84 148 / var(--tw-bg-opacity))',
	},
	'.bg-white\\/30': { backgroundColor: 'rgb(255 255 255 / 0.3)' },
	'.bg-accent-900\\/5': {
		backgroundColor: 'rgb(var(--color-accent-900) / 0.05)',
	},
	'.bg-tertiary-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-tertiary-500) / var(--tw-bg-opacity))',
	},
	'.bg-warning-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-warning-500) / var(--tw-bg-opacity))',
	},
	'.bg-black\\/50': { backgroundColor: 'rgb(0 0 0 / 0.5)' },
	'.bg-green-500\\/50': { backgroundColor: 'rgb(34 197 94 / 0.5)' },
	'.bg-red-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(239 68 68 / var(--tw-bg-opacity))',
	},
	'.bg-green-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(34 197 94 / var(--tw-bg-opacity))',
	},
	'.bg-tertiary-500\\/20': {
		backgroundColor: 'rgb(var(--color-tertiary-500) / 0.2)',
	},
	'.bg-primary-500\\/30': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.3)',
	},
	'.bg-blue-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(59 130 246 / var(--tw-bg-opacity))',
	},
	'.bg-yellow-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(234 179 8 / var(--tw-bg-opacity))',
	},
	'.bg-purple-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(168 85 247 / var(--tw-bg-opacity))',
	},
	'.bg-surface-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-500) / var(--tw-bg-opacity))',
	},
	'.\\!bg-primary-500': {
		'-TwBgOpacity': '1 !important',
		backgroundColor:
			'rgb(var(--color-primary-500) / var(--tw-bg-opacity)) !important',
	},
	'.bg-warning-500\\/30': {
		backgroundColor: 'rgb(var(--color-warning-500) / 0.3)',
	},
	'.bg-surface-300': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-300) / var(--tw-bg-opacity))',
	},
	'.bg-white': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(255 255 255 / var(--tw-bg-opacity))',
	},
	'.bg-white\\/50': { backgroundColor: 'rgb(255 255 255 / 0.5)' },
	'.bg-\\[\\#141517\\]': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(20 21 23 / var(--tw-bg-opacity))',
	},
	'.bg-white\\/5': { backgroundColor: 'rgb(255 255 255 / 0.05)' },
	'.bg-slate-800': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(30 41 59 / var(--tw-bg-opacity))',
	},
	'.bg-surface-900': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-900) / var(--tw-bg-opacity))',
	},
	'.\\!bg-emerald-500': {
		'-TwBgOpacity': '1 !important',
		backgroundColor: 'rgb(16 185 129 / var(--tw-bg-opacity)) !important',
	},
	'.\\!bg-orange-500': {
		'-TwBgOpacity': '1 !important',
		backgroundColor: 'rgb(249 115 22 / var(--tw-bg-opacity)) !important',
	},
	'.\\!bg-rose-500': {
		'-TwBgOpacity': '1 !important',
		backgroundColor: 'rgb(244 63 94 / var(--tw-bg-opacity)) !important',
	},
	'.bg-warning-500\\/20': {
		backgroundColor: 'rgb(var(--color-warning-500) / 0.2)',
	},
	'.bg-accent-500\\/20': {
		backgroundColor: 'rgb(var(--color-accent-500) / 0.2)',
	},
	'.bg-primary-500\\/20': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.2)',
	},
	'.\\!bg-accent-500\\/5': {
		backgroundColor: 'rgb(var(--color-accent-500) / 0.05) !important',
	},
	'.bg-accent-500\\/30': {
		backgroundColor: 'rgb(var(--color-accent-500) / 0.3)',
	},
	'.bg-tertiary-500\\/30': {
		backgroundColor: 'rgb(var(--color-tertiary-500) / 0.3)',
	},
	'.bg-surface-500\\/30': {
		backgroundColor: 'rgb(var(--color-surface-500) / 0.3)',
	},
	'.bg-pink-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(236 72 153 / var(--tw-bg-opacity))',
	},
	'.\\!bg-accent-500': {
		'-TwBgOpacity': '1 !important',
		backgroundColor:
			'rgb(var(--color-accent-500) / var(--tw-bg-opacity)) !important',
	},
	'.\\!bg-tertiary-500': {
		'-TwBgOpacity': '1 !important',
		backgroundColor:
			'rgb(var(--color-tertiary-500) / var(--tw-bg-opacity)) !important',
	},
	'.\\!bg-warning-500': {
		'-TwBgOpacity': '1 !important',
		backgroundColor:
			'rgb(var(--color-warning-500) / var(--tw-bg-opacity)) !important',
	},
	'.bg-\\[color\\]': { backgroundColor: 'color' },
	'.bg-primary-500\\/50': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.5)',
	},
	'.\\!bg-black': {
		'-TwBgOpacity': '1 !important',
		backgroundColor: 'rgb(0 0 0 / var(--tw-bg-opacity)) !important',
	},
	'.\\!bg-green-500': {
		'-TwBgOpacity': '1 !important',
		backgroundColor: 'rgb(34 197 94 / var(--tw-bg-opacity)) !important',
	},
	'.bg-surface-500\\/5': {
		backgroundColor: 'rgb(var(--color-surface-500) / 0.05)',
	},
	'.bg-gradient-to-r': {
		backgroundImage: 'linear-gradient(to right, var(--tw-gradient-stops))',
	},
	'.bg-gradient-to-t': {
		backgroundImage: 'linear-gradient(to top, var(--tw-gradient-stops))',
	},
	'.bg-gradient-to-b': {
		backgroundImage: 'linear-gradient(to bottom, var(--tw-gradient-stops))',
	},
	'.bg-gradient-to-l': {
		backgroundImage: 'linear-gradient(to left, var(--tw-gradient-stops))',
	},
	'.bg-gradient-to-tl': {
		backgroundImage: 'linear-gradient(to top left, var(--tw-gradient-stops))',
	},
	'.bg-gradient-to-tr': {
		backgroundImage: 'linear-gradient(to top right, var(--tw-gradient-stops))',
	},
	'.bg-gradient-to-bl': {
		backgroundImage:
			'linear-gradient(to bottom left, var(--tw-gradient-stops))',
	},
	'.bg-gradient-to-br': {
		backgroundImage:
			'linear-gradient(to bottom right, var(--tw-gradient-stops))',
	},
	'.from-primary-300': {
		'-TwGradientFrom': 'rgb(var(--color-primary-300))',
		'-TwGradientTo': 'rgb(var(--color-primary-300) / 0)',
		'-TwGradientStops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
	},
	'.from-primary-500': {
		'-TwGradientFrom': 'rgb(var(--color-primary-500))',
		'-TwGradientTo': 'rgb(var(--color-primary-500) / 0)',
		'-TwGradientStops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
	},
	'.from-accent-500': {
		'-TwGradientFrom': 'rgb(var(--color-accent-500))',
		'-TwGradientTo': 'rgb(var(--color-accent-500) / 0)',
		'-TwGradientStops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
	},
	'.from-tertiary-500': {
		'-TwGradientFrom': 'rgb(var(--color-tertiary-500))',
		'-TwGradientTo': 'rgb(var(--color-tertiary-500) / 0)',
		'-TwGradientStops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
	},
	'.from-warning-500': {
		'-TwGradientFrom': 'rgb(var(--color-warning-500))',
		'-TwGradientTo': 'rgb(var(--color-warning-500) / 0)',
		'-TwGradientStops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
	},
	'.from-surface-500': {
		'-TwGradientFrom': 'rgb(var(--color-surface-500))',
		'-TwGradientTo': 'rgb(var(--color-surface-500) / 0)',
		'-TwGradientStops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
	},
	'.to-accent-500': { '-TwGradientTo': 'rgb(var(--color-accent-500))' },
	'.to-primary-500': { '-TwGradientTo': 'rgb(var(--color-primary-500))' },
	'.to-tertiary-500': { '-TwGradientTo': 'rgb(var(--color-tertiary-500))' },
	'.to-warning-500': { '-TwGradientTo': 'rgb(var(--color-warning-500))' },
	'.to-surface-500': { '-TwGradientTo': 'rgb(var(--color-surface-500))' },
	'.box-decoration-clone': {
		WebkitBoxDecorationBreak: 'clone',
		boxDecorationBreak: 'clone',
	},
	'.bg-cover': { backgroundSize: 'cover' },
	'.bg-clip-text': { WebkitBackgroundClip: 'text', backgroundClip: 'text' },
	'.bg-center': { backgroundPosition: 'center' },
	'.fill-white': { fill: '#fff' },
	'.fill-black': { fill: '#000' },
	'.fill-surface-500': { fill: 'rgb(var(--color-surface-500))' },
	'.fill-transparent': { fill: 'transparent' },
	'.fill-current': { fill: 'currentColor' },
	'.fill-primary-500': { fill: 'rgb(var(--color-primary-500))' },
	'.fill-tertiary-500': { fill: 'rgb(var(--color-tertiary-500))' },
	'.fill-inherit': { fill: 'inherit' },
	'.fill-\\[mode\\]': { fill: 'mode' },
	'.stroke-accent-500': { stroke: 'rgb(var(--color-accent-500))' },
	'.stroke-surface-200': { stroke: 'rgb(var(--color-surface-200))' },
	'.stroke-surface-300': { stroke: 'rgb(var(--color-surface-300))' },
	'.stroke-black': { stroke: '#000' },
	'.stroke-primary-500': { stroke: 'rgb(var(--color-primary-500))' },
	'.stroke-primary-500\\/20': { stroke: 'rgb(var(--color-primary-500) / 0.2)' },
	'.stroke-accent-500\\/20': { stroke: 'rgb(var(--color-accent-500) / 0.2)' },
	'.stroke-tertiary-500': { stroke: 'rgb(var(--color-tertiary-500))' },
	'.stroke-tertiary-500\\/20': {
		stroke: 'rgb(var(--color-tertiary-500) / 0.2)',
	},
	'.stroke-surface-500': { stroke: 'rgb(var(--color-surface-500))' },
	'.object-cover': { OObjectFit: 'cover', objectFit: 'cover' },
	'.p-4': { padding: '1rem' },
	'.\\!p-0': { padding: '0px !important' },
	'.p-2': { padding: '0.5rem' },
	'.p-5': { padding: '1.25rem' },
	'.p-1': { padding: '0.25rem' },
	'.p-6': { padding: '1.5rem' },
	'.p-8': { padding: '2rem' },
	'.px-4': { paddingLeft: '1rem', paddingRight: '1rem' },
	'.py-10': { paddingTop: '2.5rem', paddingBottom: '2.5rem' },
	'.py-2': { paddingTop: '0.5rem', paddingBottom: '0.5rem' },
	'.py-8': { paddingTop: '2rem', paddingBottom: '2rem' },
	'.py-3': { paddingTop: '0.75rem', paddingBottom: '0.75rem' },
	'.px-2': { paddingLeft: '0.5rem', paddingRight: '0.5rem' },
	'.py-2\\.5': { paddingTop: '0.625rem', paddingBottom: '0.625rem' },
	'.py-4': { paddingTop: '1rem', paddingBottom: '1rem' },
	'.\\!py-10': {
		paddingTop: '2.5rem !important',
		paddingBottom: '2.5rem !important',
	},
	'.px-10': { paddingLeft: '2.5rem', paddingRight: '2.5rem' },
	'.py-5': { paddingTop: '1.25rem', paddingBottom: '1.25rem' },
	'.pb-20': { paddingBottom: '5rem' },
	'.pr-1': { paddingRight: '0.25rem' },
	'.\\!pb-0': { paddingBottom: '0px !important' },
	'.pb-10': { paddingBottom: '2.5rem' },
	'.pl-4': { paddingLeft: '1rem' },
	'.pt-1': { paddingTop: '0.25rem' },
	'.pb-3': { paddingBottom: '0.75rem' },
	'.text-center': { textAlign: 'center' },
	'.text-sm': { fontSize: '0.875rem', lineHeight: '1.25rem' },
	'.text-xs': { fontSize: '0.75rem', lineHeight: '1rem' },
	'.\\!text-sm': {
		fontSize: '0.875rem !important',
		lineHeight: '1.25rem !important',
	},
	'.text-xl': { fontSize: '1.25rem', lineHeight: '1.75rem' },
	'.text-base': { fontSize: '1rem', lineHeight: '1.5rem' },
	'.text-4xl': { fontSize: '2.25rem', lineHeight: '2.5rem' },
	'.text-lg': { fontSize: '1.125rem', lineHeight: '1.75rem' },
	'.text-2xl': { fontSize: '1.5rem', lineHeight: '2rem' },
	'.\\!text-xs': {
		fontSize: '0.75rem !important',
		lineHeight: '1rem !important',
	},
	'.text-3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' },
	'.font-bold': { fontWeight: '700' },
	'.font-semibold': { fontWeight: '600' },
	'.font-normal': { fontWeight: '400' },
	'.uppercase': { textTransform: 'uppercase' },
	'.lowercase': { textTransform: 'lowercase' },
	'.capitalize': { textTransform: 'capitalize' },
	'.tracking-tight': { letterSpacing: '-0.025em' },
	'.\\!text-primary-500': {
		'-TwTextOpacity': '1 !important',
		color: 'rgb(var(--color-primary-500) / var(--tw-text-opacity)) !important',
	},
	'.text-white': {
		'-TwTextOpacity': '1',
		color: 'rgb(255 255 255 / var(--tw-text-opacity))',
	},
	'.text-primary-500': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-primary-500) / var(--tw-text-opacity))',
	},
	'.text-accent-500': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-accent-500) / var(--tw-text-opacity))',
	},
	'.text-surface-50': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-50) / var(--tw-text-opacity))',
	},
	'.text-surface-500': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-500) / var(--tw-text-opacity))',
	},
	'.text-transparent': { color: 'transparent' },
	'.\\!text-white': {
		'-TwTextOpacity': '1 !important',
		color: 'rgb(255 255 255 / var(--tw-text-opacity)) !important',
	},
	'.text-white\\/60': { color: 'rgb(255 255 255 / 0.6)' },
	'.text-tertiary-500': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-tertiary-500) / var(--tw-text-opacity))',
	},
	'.text-gray-900': {
		'-TwTextOpacity': '1',
		color: 'rgb(17 24 39 / var(--tw-text-opacity))',
	},
	'.text-gray-700': {
		'-TwTextOpacity': '1',
		color: 'rgb(55 65 81 / var(--tw-text-opacity))',
	},
	'.text-surface-900': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-900) / var(--tw-text-opacity))',
	},
	'.text-surface-700': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-700) / var(--tw-text-opacity))',
	},
	'.text-black': {
		'-TwTextOpacity': '1',
		color: 'rgb(0 0 0 / var(--tw-text-opacity))',
	},
	'.text-warning-500': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-warning-500) / var(--tw-text-opacity))',
	},
	'.text-yellow-500': {
		'-TwTextOpacity': '1',
		color: 'rgb(234 179 8 / var(--tw-text-opacity))',
	},
	'.\\!text-yellow-500': {
		'-TwTextOpacity': '1 !important',
		color: 'rgb(234 179 8 / var(--tw-text-opacity)) !important',
	},
	'.underline': { textDecorationLine: 'underline' },
	'.\\!no-underline': { textDecorationLine: 'none !important' },
	'.accent-accent-500': { accentColor: 'rgb(var(--color-accent-500))' },
	'.accent-primary-500': { accentColor: 'rgb(var(--color-primary-500))' },
	'.accent-tertiary-500': { accentColor: 'rgb(var(--color-tertiary-500))' },
	'.accent-warning-500': { accentColor: 'rgb(var(--color-warning-500))' },
	'.accent-surface-500': { accentColor: 'rgb(var(--color-surface-500))' },
	'.accent-\\[color\\]': { accentColor: 'color' },
	'.opacity-50': { opacity: '0.5' },
	'.opacity-20': { opacity: '0.2' },
	'.opacity-80': { opacity: '0.8' },
	'.opacity-10': { opacity: '0.1' },
	'.opacity-30': { opacity: '0.3' },
	'.opacity-75': { opacity: '0.75' },
	'.opacity-70': { opacity: '0.7' },
	'.\\!opacity-100': { opacity: '1 !important' },
	'.shadow': {
		'-TwShadow':
			'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
		'-TwShadowColored':
			'0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
	},
	'.shadow-lg': {
		'-TwShadow':
			'0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
		'-TwShadowColored':
			'0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
	},
	'.shadow-xl': {
		'-TwShadow':
			'0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
		'-TwShadowColored':
			'0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
	},
	'.shadow-md': {
		'-TwShadow':
			'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
		'-TwShadowColored':
			'0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
	},
	'.outline-none': { outline: '2px solid transparent', outlineOffset: '2px' },
	'.outline': { outlineStyle: 'solid' },
	'.ring-\\[1px\\]': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
	},
	'.ring': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
	},
	'.ring-2': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
	},
	'.ring-inset': { '-TwRingInset': 'inset' },
	'.ring-black\\/5': { '-TwRingColor': 'rgb(0 0 0 / 0.05)' },
	'.ring-primary-500': {
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-primary-500) / var(--tw-ring-opacity))',
	},
	'.ring-accent-500': {
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-accent-500) / var(--tw-ring-opacity))',
	},
	'.ring-tertiary-500': {
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-tertiary-500) / var(--tw-ring-opacity))',
	},
	'.ring-warning-500': {
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-warning-500) / var(--tw-ring-opacity))',
	},
	'.ring-surface-500': {
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-surface-500) / var(--tw-ring-opacity))',
	},
	'.blur-\\[64px\\]': {
		'-TwBlur': 'blur(64px)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'.blur': {
		'-TwBlur': 'blur(8px)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'.invert': {
		'-TwInvert': 'invert(100%)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'.filter': {
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'.transition-colors': {
		transitionProperty:
			'color, background-color, border-color, text-decoration-color, fill, stroke',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionDuration: '150ms',
	},
	'.transition-all': {
		transitionProperty: 'all',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionDuration: '150ms',
	},
	'.transition': {
		transitionProperty: [
			'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter',
			'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
			'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter',
		],
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionDuration: '150ms',
	},
	'.transition-\\[stroke-dashoffset\\]': {
		transitionProperty: 'stroke-dashoffset',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionDuration: '150ms',
	},
	'.duration-100': { transitionDuration: '100ms' },
	'.duration-200': { transitionDuration: '200ms' },
	'.duration-\\[100ms\\]': { transitionDuration: '100ms' },
	'.duration-\\[200ms\\]': { transitionDuration: '200ms' },
	'.bg-surface-backdrop-token': {
		backgroundColor: 'rgb(var(--color-surface-400) / 0.7)',
	},
	'.dark .bg-surface-backdrop-token': {
		backgroundColor: 'rgb(var(--color-surface-900) / 0.7)',
	},
	'.bg-primary-hover-token:hover': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.1)',
	},
	'.bg-primary-active-token': {
		'-TwBgOpacity': '1 !important',
		backgroundColor:
			'rgb(var(--color-primary-500) / var(--tw-bg-opacity)) !important',
		fill: 'var(--on-primary)',
		color: 'var(--on-primary)',
	},
	'.\\!bg-primary-active-token': {
		'-TwBgOpacity': '1 !important',
		backgroundColor:
			'rgb(var(--color-primary-500) / var(--tw-bg-opacity)) !important',
		fill: 'var(--on-primary)',
		color: 'var(--on-primary)',
	},
	'.bg-accent-hover-token:hover': {
		backgroundColor: 'rgb(var(--color-accent-500) / 0.1)',
	},
	'.bg-accent-active-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-accent-500) / var(--tw-bg-opacity))',
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-accent-50) / var(--tw-text-opacity))',
	},
	'.dark .bg-accent-active-token': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-accent-50) / var(--tw-text-opacity))',
	},
	'.\\!bg-accent-active-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-accent-500) / var(--tw-bg-opacity))',
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-accent-50) / var(--tw-text-opacity))',
	},
	'.dark .\\!bg-accent-active-token': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-accent-50) / var(--tw-text-opacity))',
	},
	'.bg-surface-50-900-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-50) / var(--tw-bg-opacity))',
	},
	'.dark .bg-surface-50-900-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-900) / var(--tw-bg-opacity))',
	},
	'.bg-surface-100-800-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-100) / var(--tw-bg-opacity))',
	},
	'.dark .bg-surface-100-800-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-800) / var(--tw-bg-opacity))',
	},
	'.bg-surface-200-700-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-200) / var(--tw-bg-opacity))',
	},
	'.dark .bg-surface-200-700-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-700) / var(--tw-bg-opacity))',
	},
	'.bg-surface-300-600-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-300) / var(--tw-bg-opacity))',
	},
	'.dark .bg-surface-300-600-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-600) / var(--tw-bg-opacity))',
	},
	'.bg-surface-400-500-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-400) / var(--tw-bg-opacity))',
	},
	'.dark .bg-surface-400-500-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-500) / var(--tw-bg-opacity))',
	},
	'.bg-surface-900-50-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-900) / var(--tw-bg-opacity))',
	},
	'.dark .bg-surface-900-50-token': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-50) / var(--tw-bg-opacity))',
	},
	'.border-token': { borderWidth: 'var(--theme-border-base)' },
	'.border-surface-300-600-token': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-surface-300) / var(--tw-border-opacity))',
	},
	'.dark .border-surface-300-600-token': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-surface-600) / var(--tw-border-opacity))',
	},
	'.rounded-token': { borderRadius: 'var(--theme-rounded-base)' },
	'.rounded-container-token': {
		borderRadius: 'var(--theme-rounded-container)',
	},
	'.rounded-tl-container-token': {
		borderTopLeftRadius: 'var(--theme-rounded-container)',
	},
	'.rounded-tr-container-token': {
		borderTopRightRadius: 'var(--theme-rounded-container)',
	},
	'.fill-token': { fill: 'rgba(var(--theme-font-color-base))' },
	'.dark .fill-token': { fill: 'rgba(var(--theme-font-color-dark))' },
	'.fill-on-accent-token': { fill: 'var(--on-accent)' },
	'.ring-outline-token': {
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingColor': 'rgb(23 23 23 / 0.05)',
	},
	'.dark .ring-outline-token': { '-TwRingColor': 'rgb(250 250 250 / 0.05)' },
	'.ring-surface-300-600-token': {
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-surface-300) / var(--tw-ring-opacity))',
	},
	'.dark .ring-surface-300-600-token': {
		'-TwRingOpacity': '1',
		'-TwRingColor': 'rgb(var(--color-surface-600) / var(--tw-ring-opacity))',
	},
	'.font-heading-token': { fontFamily: 'var(--theme-font-family-heading)' },
	'.font-token': { fontFamily: 'var(--theme-font-family-base)' },
	'.text-token': { color: 'rgba(var(--theme-font-color-base))' },
	'.dark .text-token': { color: 'rgba(var(--theme-font-color-dark))' },
	'.text-on-primary-token': { color: 'var(--on-primary)' },
	'.text-on-accent-token': { color: 'var(--on-accent)' },
	'.text-on-tertiary-token': { color: 'var(--on-tertiary)' },
	'.text-on-warning-token': { color: 'var(--on-warning)' },
	'.accent-accent-token': { accentColor: 'rgb(var(--color-accent-500))' },
	'.hover\\:card:hover': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-100) / var(--tw-bg-opacity))',
		'-TwRingOffsetShadow':
			'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
		'-TwRingShadow':
			'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
		'-TwRingInset': 'inset',
		'-TwRingColor': 'rgb(23 23 23 / 0.05)',
		borderRadius: 'var(--theme-rounded-container)',
	},
	'.dark .hover\\:card:hover': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-800) / var(--tw-bg-opacity))',
		'-TwRingColor': 'rgb(250 250 250 / 0.05)',
	},
	'.hover\\:card:hovera': {
		transitionProperty: 'all',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionDuration: '150ms',
	},
	'.hover\\:card:hovera:hover': {
		'-TwBrightness': 'brightness(1.1)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'.hover\\:border-2:hover': { borderWidth: '2px' },
	'.hover\\:\\!border-primary-500:hover': {
		'-TwBorderOpacity': '1 !important',
		borderColor:
			'rgb(var(--color-primary-500) / var(--tw-border-opacity)) !important',
	},
	'.hover\\:\\!bg-primary-500\\/30:hover': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.3) !important',
	},
	'.hover\\:bg-primary-500\\/10:hover': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.1)',
	},
	'.hover\\:bg-white\\/10:hover': { backgroundColor: 'rgb(255 255 255 / 0.1)' },
	'.hover\\:bg-accent-500\\/10:hover': {
		backgroundColor: 'rgb(var(--color-accent-500) / 0.1)',
	},
	'.hover\\:bg-tertiary-500\\/10:hover': {
		backgroundColor: 'rgb(var(--color-tertiary-500) / 0.1)',
	},
	'.hover\\:bg-gray-100:hover': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(243 244 246 / var(--tw-bg-opacity))',
	},
	'.hover\\:bg-surface-100:hover': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-100) / var(--tw-bg-opacity))',
	},
	'.hover\\:fill-primary-300:hover': { fill: 'rgb(var(--color-primary-300))' },
	'.hover\\:\\!ring-white\\/20:hover': {
		'-TwRingColor': 'rgb(255 255 255 / 0.2) !important',
	},
	'.hover\\:brightness-\\[105\\%\\]:hover': {
		'-TwBrightness': 'brightness(105%)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'.hover\\:bg-primary-hover-token:hover:hover': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.1)',
	},
	'.dark .dark\\:border-white\\/5': { borderColor: 'rgb(255 255 255 / 0.05)' },
	'.dark .dark\\:border-surface-600': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-surface-600) / var(--tw-border-opacity))',
	},
	'.dark .dark\\:border-surface-700': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(var(--color-surface-700) / var(--tw-border-opacity))',
	},
	'.dark .dark\\:border-gray-700': {
		'-TwBorderOpacity': '1',
		borderColor: 'rgb(55 65 81 / var(--tw-border-opacity))',
	},
	'.dark .dark\\:bg-black\\/30': { backgroundColor: 'rgb(0 0 0 / 0.3)' },
	'.dark .dark\\:bg-accent-900\\/20': {
		backgroundColor: 'rgb(var(--color-accent-900) / 0.2)',
	},
	'.dark .dark\\:bg-surface-700': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-700) / var(--tw-bg-opacity))',
	},
	'.dark .dark\\:bg-black': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(0 0 0 / var(--tw-bg-opacity))',
	},
	'.dark .dark\\:bg-gray-800': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(31 41 55 / var(--tw-bg-opacity))',
	},
	'.dark .dark\\:bg-surface-800': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-800) / var(--tw-bg-opacity))',
	},
	'.dark .dark\\:bg-green-500': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(34 197 94 / var(--tw-bg-opacity))',
	},
	'.dark .dark\\:fill-white': { fill: '#fff' },
	'.dark .dark\\:fill-black': { fill: '#000' },
	'.dark .dark\\:stroke-surface-700': {
		stroke: 'rgb(var(--color-surface-700))',
	},
	'.dark .dark\\:stroke-white': { stroke: '#fff' },
	'.dark .dark\\:text-white': {
		'-TwTextOpacity': '1',
		color: 'rgb(255 255 255 / var(--tw-text-opacity))',
	},
	'.dark .dark\\:text-gray-400': {
		'-TwTextOpacity': '1',
		color: 'rgb(156 163 175 / var(--tw-text-opacity))',
	},
	'.dark .dark\\:text-surface-400': {
		'-TwTextOpacity': '1',
		color: 'rgb(var(--color-surface-400) / var(--tw-text-opacity))',
	},
	'.dark .dark\\:ring-white\\/5': { '-TwRingColor': 'rgb(255 255 255 / 0.05)' },
	'.dark .dark\\:invert-0': {
		'-TwInvert': 'invert(0)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'.dark .dark\\:invert': {
		'-TwInvert': 'invert(100%)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'.dark .dark\\:hover\\:bg-gray-700:hover': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(55 65 81 / var(--tw-bg-opacity))',
	},
	'.dark .dark\\:hover\\:bg-surface-700:hover': {
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-surface-700) / var(--tw-bg-opacity))',
	},
	'.dark .dark\\:hover\\:brightness-110:hover': {
		'-TwBrightness': 'brightness(1.1)',
		filter:
			'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
	},
	'.\\[\\&\\>\\.foo-label\\]\\:p-4>.foo-label': { padding: '1rem' },
	'[data-menu]': { position: 'absolute', zIndex: '20', display: 'none' },
	'[data-menu] a:focus-visible': {
		backgroundColor: 'rgb(var(--color-primary-500) / 0.1)',
	},
	':root': { '-MenuOffset': '8px', '-TooltipOffset': '8px' },
	'.tooltip': {
		position: 'absolute',
		zIndex: '45',
		transformOrigin: 'center',
		textAlign: 'center',
		opacity: '0',
		transitionProperty: 'opacity',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionDuration: '150ms',
		width: '12rem',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-primary-500) / var(--tw-bg-opacity))',
		padding: '0.5rem',
		'-TwShadow':
			'0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
		'-TwShadowColored':
			'0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)',
		boxShadow:
			'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
		borderRadius: 'var(--theme-rounded-container)',
	},
	'.tooltip-top': {
		top: '0px',
		left: '50%',
		'-TwTranslateX': '-50%',
		'-TwTranslateY': 'calc(calc(100% + var(--tooltip-offset)) * -1)',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.tooltip-bottom': {
		bottom: '0px',
		left: '50%',
		'-TwTranslateX': '-50%',
		'-TwTranslateY': 'calc(100% + var(--tooltip-offset))',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.tooltip-left': {
		left: '0px',
		top: '50%',
		'-TwTranslateY': '-50%',
		'-TwTranslateX': 'calc(calc(100% + var(--tooltip-offset)) * -1)',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.tooltip-right': {
		right: '0px',
		top: '50%',
		'-TwTranslateY': '-50%',
		'-TwTranslateX': 'calc(100% + var(--tooltip-offset))',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.tooltip-arrow': {
		position: 'absolute',
		height: '0.5rem',
		width: '0.5rem',
		transformOrigin: 'center',
		'-TwRotate': '-45deg',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-primary-500) / var(--tw-bg-opacity))',
	},
	'.tooltip-arrow-top': {
		position: 'absolute',
		height: '0.5rem',
		width: '0.5rem',
		transformOrigin: 'center',
		'-TwRotate': '-45deg',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-primary-500) / var(--tw-bg-opacity))',
		bottom: '0px',
		left: '0px',
		right: '0px',
		marginLeft: 'auto',
		marginRight: 'auto',
		'-TwTranslateY': '50%',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.tooltip-arrow-bottom': {
		position: 'absolute',
		height: '0.5rem',
		width: '0.5rem',
		transformOrigin: 'center',
		'-TwRotate': '-45deg',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-primary-500) / var(--tw-bg-opacity))',
		top: '0px',
		left: '0px',
		right: '0px',
		marginLeft: 'auto',
		marginRight: 'auto',
		'-TwTranslateY': '-50%',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.tooltip-arrow-left': {
		position: 'absolute',
		height: '0.5rem',
		width: '0.5rem',
		transformOrigin: 'center',
		'-TwRotate': '-45deg',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-primary-500) / var(--tw-bg-opacity))',
		top: '0px',
		bottom: '0px',
		right: '0px',
		marginTop: 'auto',
		marginBottom: 'auto',
		'-TwTranslateX': '50%',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
	'.tooltip-arrow-right': {
		position: 'absolute',
		height: '0.5rem',
		width: '0.5rem',
		transformOrigin: 'center',
		'-TwRotate': '-45deg',
		'-TwBgOpacity': '1',
		backgroundColor: 'rgb(var(--color-primary-500) / var(--tw-bg-opacity))',
		top: '0px',
		bottom: '0px',
		left: '0px',
		marginTop: 'auto',
		marginBottom: 'auto',
		'-TwTranslateX': '-50%',
		transform:
			'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
	},
}
