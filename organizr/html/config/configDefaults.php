<?php
return array(
	"database_Location" => false,
	"user_home" => false,
	"timezone" => "",
	"plexURL" => "",
	"plexTabURL" => "",
	"plexToken" => "",
	"plexRecentMovie" => "false",
	"plexRecentTV" => "false",
	"plexRecentMusic" => "false",
	"plexPlayingNow" => "false",
	"plexRecentMovieAuth" => "false",
	"plexRecentTVAuth" => "false",
	"plexRecentMusicAuth" => "false",
	"plexPlayingNowAuth" => "false",
 	"plexShowNames" => false,
	"plexHomeAuth" => false,
	"plexSearch" => false,
	"plexSearchAuth" => false,
	"plexRecentItems" => "20",
	"plexPlaylists" => "false",
	"plexPlaylistsAuth" => "false",
	"plexTabName" => "",
	"embyURL" => "",
	"embyToken" => "",
	"embyRecentMovie" => "false",
	"embyRecentTV" => "false",
	"embyRecentMusic" => "false",
	"embyPlayingNow" => "false",
 	"embyShowNames" => false,
	"embyHomeAuth" => false,
	"embySearch" => false,
	"embyRecentItems" => "20",
	"sonarrURL" => "",
	"sonarrKey" => "",
	"sonarrHomeAuth" => false,
	"sickrageURL" => "",
	"sickrageKey" => "",
	"sickrageHomeAuth" => false,
	"radarrURL" => "",
	"radarrKey" => "",
	"radarrHomeAuth" => false,
	"nzbgetURL" => "",
	"nzbgetUsername" => "",
	"nzbgetPassword" => "",
	"nzbgetHomeAuth" => false,
	"transmissionURL" => "",
	"transmissionUsername" => "",
	"transmissionPassword" => "",
	"transmissionHomeAuth" => false,
	"sabnzbdURL" => "",
	"sabnzbdKey" => "",
	"sabnzbdHomeAuth" => false,
	"ombiURL" => "",
	"ombiKey" => "",
	"ombiAuth" => false,
	"headphonesURL" => "",
	"headphonesKey" => "",
	"headphonesHomeAuth" => false,
	"calendarStart" => "0",
	"calendarView" => "basicWeek",
	"calendarStartDay" => "30",
	"calendarEndDay" => "30",
	"authType" => "internal",
	"authBackend" => "",
	"authBackendCreate" => "true",
	"authBackendHost" => "",
	"authBackendDomain" => "",
	"plexUsername" => "",
	"plexPassword" => "",
	"titleLogo" => "",
	"loadingIcon" => "",
	"cookiePassword" => "",
	"domain" => $_SERVER['HTTP_HOST'],
	"registerPassword" => "",
	"smtpHost" => "",
	"smtpHostPort" => "",
	"smtpHostAuth" => "true",
	"smtpHostUsername" => "",
	"smtpHostPassword" => "",
	"smtpHostSenderName" => "Organizr",
	"smtpHostSenderEmail" => "no-reply@Organizr.tld",
	"notifyEffect" => "bar-slidetop",
	"multipleLogin" => "false",
	"loadingScreen" => "true",
	"enableMail" => "false",
	"slimBar" => "true",
	"gravatar" => "true",
	"calTimeFormat" => "h(:mm)t",
	"homePageAuthNeeded" => false,
	"homepageCustomHTML1" => "",
	"homepageCustomHTML1Auth" => false,
	"git_branch" => "master",
	"git_check" => true,
	"speedTest" => false,
	"smtpHostType" => "tls",
	"homepageNoticeTitle" => "",
	"homepageNoticeMessage" => "",
	"homepageNoticeTitleGuest" => "",
	"homepageNoticeMessageGuest" => "",
	"homepageNoticeType" => "success",
	"homepageNoticeTypeGuest" => "success",
	"homepageNoticeAuth" => "false",
	"homepageNoticeLayout" => "elegant",
	"homepageNoticeLayoutGuest" => "elegant",
	"ipInfoToken" => "ddd0c072ad5021",
	"historyRefresh" => "120000",
	"downloadRefresh" => "30000",
	"organizrAPI" => "",
	"splash" => "false",
	"splashAuth" => false,
	"chat" => "false",
	"chatAuth" => "false",
	"installedTheme" => "",
	"calendarRefresh" => "60000",
	"authBackendDomainFormat" => "",
	"couchURL" => "",
	"couchAPI" => "",
	"couchHomeAuth" => false,
	"weather" => "false",
	"weatherAuth" => "false",
	"speedtestAuth" => "false",
	"recentRefresh" => "600000",
	"requestRefresh" => "600000",
	"nowPlayingRefresh" => "15000",
	"embyRecentMovieAuth" => "false",
	"embyRecentTVAuth" => "false",
	"embyRecentMusicAuth" => "false",
	"embyPlayingNowAuth" => "false",
	"homepageOrdercustomhtml" => '1',
	"homepageOrdernotice" => '2',
	"homepageOrderplexsearch" => '3',
	"homepageOrderspeedtest" => '4',
	"homepageOrdernzbget" => '5',
	"homepageOrdersabnzbd" => '6',
	"homepageOrderplexnowplaying" => '7',
	"homepageOrderplexrecent" => '8',
	"homepageOrderplexplaylist" => '9',
	"homepageOrderembynowplaying" => '10',
	"homepageOrderembyrecent" => '11',
	"homepageOrderombi" => '12',
	"homepageOrdercalendar" => '13',
	"homepageOrdernoticeguest" => '14',
	"homepageOrdertransmisson" => '15',
	'requestedUserOnly' => 'true',
	'emailTemplateCSS' => '',
	'emailTempateLogo' => 'https://raw.githubusercontent.com/causefx/Organizr/master/images/organizr-logo-h.png',
	'emailTemplateResetPassword' => '
	<h2>Hey there {user}!</h2><br />
	Looks like you forgot your password.  Well, I got you...  Here is your new password: {password}<br />
	If you want to change it once you log in, you can.  Head over to my website: {domain}<br />
	',
	'emailTemplateResetPasswordSubject' => 'Password Reset',
	'emailTemplateInviteUser' => '
	<h2>Hey there {user}!</h2><br />
	Here is the invite code to join my cool media server: {inviteCode}<br/>
	Head over to my website and enter the code to join: {domain}<br />
	',
	'emailTemplateInviteUserSubject' => 'You have been invited to join my server',
	'emailTemplateRegisterUser' => '
	<h2>Hey there {user}!</h2><br />
	Welcome to me site.<br/>
	If you need anything, please let me know.<br />
	',
	'emailTemplateRegisterUserSubject' => 'Thank you For Registering',
	'emailTemplateCustomOne' => '',
	'emailTemplateCustomOneName' => 'Template #1',
	'emailTemplateCustomOneSubject' => '',
	'emailTemplateCustomTwo' => '',
	'emailTemplateCustomTwoName' => 'Template #2',
	'emailTemplateCustomTwoSubject' => '',
	'emailTemplateCustomThree' => '',
	'emailTemplateCustomThreeName' => 'Template #3',
	'emailTemplateCustomThreeSubject' => '',
	'emailTemplateCustomFour' => '',
	'emailTemplateCustomFourName' => 'Template #4',
	'emailTemplateCustomFourSubject' => '',
);
