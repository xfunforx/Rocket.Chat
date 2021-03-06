import { AdminBox } from '/app/ui-utils';
import { hasPermission } from '/app/authorization';

AdminBox.addOption({
	href: 'emoji-custom',
	i18nLabel: 'Custom_Emoji',
	icon: 'emoji',
	permissionGranted() {
		return hasPermission('manage-emoji');
	},
});
