//send pagename like 'about-us' 
//can send id tag to scroll to any section 'about-us#ID' 
function getLink(pageName = ''){
	const siteUrl = 'http://example.com';
	return siteUrl + pageName ;
}

var searchIndex = [
	{
		title: "من نحن",
		content: "نحن نؤمن بأن المواطن يمكن أن يكون واجهة عالمية تأسست شركة فيرون عام 2014 ، وتسعى لان تكون الشركة الرائدة في مجال الخدمات التسويقية والاستشارات",
		url: getLink()
	},
	{
		title: "خدماتنا",
		content: "تطوير المواقع والتطبيقات  | التسويق الجغرافى | البحوث التسويقية | التصميم الابداعي | التسويق الرقمى | ادارة الحملات الاعلانية | ادارة الفعاليات | المعارض ",
		url: getLink()
	},
	{
		title: "البحوث التسويقية",
		content: "البحوث التسويقية",
		url: getLink()
	},
	{
		title: "التسويق الجغرافى",
		content: "التسويق المحلى | التغطية و التوسع | تحسين المبيعات | البيانات و التخطيط ",
		url: getLink()
	},
	{
		title: "تطوير المواقع والتطبيقات",
		content: "تطوير تطبيقات الجوال | الإستضافة و إدارة النطاق | تطوير المواقع الإلكترونية ",
		url: getLink()
	},
	{
		title: "التسويق الرقمى",
		content: "إدارة المحتوى | إدارة قنوات التواصل الاجتماعي | إدارة محركات البحث",
		url: getLink()
	},
	{
		title: "التصميم الإبداعى",
		content: "   كتابة النصوص والترجمة | التعبئة والتغلي | تصوير وانتاج الفيديو | تطوير و تصميم العلامة التجارية | الطباعة ",
		url: getLink()
	},
	{
		title: "شركائنا",
		content: "شركائنا",
		url: getLink()
	},
	{
		title: "إتصل بنا",
		content: "إتصل بنا",
		url: getLink()
	},
	// {
	// 	title: "My awesome article",
	// 	content: "The full text of the cpreviewontent...",
	// 	url: getLink()
	// },
	
	
];
