export const APP_NAME = 'Abrush Empire';
export const APP_VERSION = '1.0.0';

// ERROR MESSAGES
export const EMPTY_FIELD = 'Email, Mobile Number and password cannot be empty';

export const VALID_EMAIL = 'Please enter a valid email address';
export const VALID_PASSWORD =
  'Password should have one uppercase, one lowercase, one number, one special character, minimum 8 characters';
export const VALID_OLD_PASSWORD = 'Please enter your valid old password.';
export const VALID_NEW_PASSWORD =
  'Please enter new password and should have one uppercase, one lowercase, one number, one special character, minimum 8 characters';
export const VALID_NEW_CON_PASSWORD =
  'Please enter re-enter new password and should have one uppercase, one lowercase, one number, one special character, minimum 8 characters';
export const VALID_MISMATCH_PASSWORD =
  'New entered password & confirm password are not same.';
export const VALID_FIRST_NAME = 'Please Enter valid name.';
export const CHECK_TERMS = 'Please agree terms & condtions before sign up';
export const VALID_LAST_NAME = 'Please Enter last name.';
export const VALID_GENDER = 'Please select your gender.';
export const VALID_DOB = 'Please enter your date of birth.';
export const VALID_COUNTRY = 'Please select your country.';
export const VALID_CITY = 'Please enter your city.';
export const VALID_ZIP_CODE = 'Please enter your zip code.';
export const VALID_ADDRESS_DETAIL = 'Please enter your address.';
export const VALID_PHONE_CODE = 'Please select your Country code.';
export const VALID_PHONE_NO = 'Please enter a valid Phone number.';
export const VALID_OTP_CODE = 'Please enter OTP';
export const VALID_PASSPORT_NO = 'Please enter a valid passport number.';
export const VALID_DRIVING_LIS_NO =
  'Please enter a valid driver license number.';
export const VALID_NATIONAL_ID_NO = 'Please enter a valid National ID number.';
export const VALID_PASSPORT_EXPIRY_DATE =
  'Please enter a valid expiry date of your document.';
export const VALID_PASSPORT_SELFIE = 'Please select your selfie.';
export const VALID_GOOGLE_AUTH_CODE =
  'Please enter a valid Google Authenticator code.';
export const PIN_RESET_ALERT =
  'An email to reset Login PIN will be sent to you on your registered email address.\nDo you want to continue?';
export const VALID_ACCOUNT_NO = 'Please enter a valid account number.';
export const VALID_ACCOUNT_TYPE = 'Please enter a valid account type.';
export const VALID_BANK_NAME = 'Please enter a valid bank name.';
export const VALID_BRANCH_NAME = 'Please enter a valid branch name.';
export const VALID_BRANCH_CODE = 'Please enter a valid branch code.';
export const VALID_SWIFT_CODE = 'Please enter a valid swift code.';

export const VALID_BENI_NAME = 'Please enter a valid benificiary name.';
export const VALID_BENI_ADDRESS = 'Please enter a benificiary address.';
export const VALID_FIRST_NAME_LENGTH =
  'First name must have minimum 2 and maximum 20 characters.';
export const VALID_LAST_NAME_LENGTH =
  'Last name must have minimum 2 and maximum 20 characters.';

export const FIELDS_MANDATORY = 'All fields are mandatory';
export const ENTER_NAME = 'Name is a required Field.';
export const ENTER_NAME_MORE = 'Minimum 2 Character are required in name.';
export const ENTER_SUBJECT = 'Subject is a required Field.';
export const ENTER_SUBJECT_MORE =
  'Minimum 5 character are required in subject.';
export const ENTER_MESSAGE = 'Message is a required Field.';
export const ENTER_MESSAGE_MORE =
  'Minimum 5 character are required in message.';
export const ENTER_EMAIL = 'Email Address is a required Field.';
export const SOME_WENT_WRONG = 'Something went wrong.';

// AsyncStorageKeys
export const ACCESS_TOKEN = 'access_token';
export const SAVED_COOKIES = 'saved_cookies';
export const KYC_ID = 'kyc_id';
export const USER_DATA = 'userdata';
export const HIDE_ZERO_BALANCE = 'hideZero';

export const IS_LOGIN = 'is_login';
export const IS_BIOMETRIC_ENABLED = 'is_biometric_enabled';

export const IS_THEME_ENABLE = 'theme_enabled';
export const CURRENT_THEME_MODE = 'current_mode';

export const VERIFY_INFO_STEP = 'verify_info_step';
export const PHONE_VERIFY_STEP = 'phone_verify_step';
export const SELECT_DOC_STEP = 'select_doc_step';
export const DOC_DETAILS_STEP = 'doc_details_step';
export const SELFIE_STEP = 'selfie_step';
export const FILE_DOC_STEP = 'fileDoc_step';

export const LOGIN_CREDENTIALS = 'login_credentials';

export const CRYPTO_DECIMAL_ROUNDOFF = 4;
export const BALANCE_ROUNDOFF = 6;

export let ALPHABET_REGEX = /^[a-zA-Z]*$/;
export let ALPHABET_HYPEN_REGEX = /^[a-zA-Z]*\-?[a-zA-Z]*$/;
export let NAME_REGEX = /^[a-zA-Z ]*$/;
export let RemoveDecimal = /\..*$/;
export const EMAIL_REGEX =
  /^\w+([\.-\.+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const STANDARD_PASSWORD_REGAX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const FULL_NAME_REGEX = /^[A-Za-z\s]{2,}[A-Za-z\s]{0,}$/;

export const GALLERY_IMAGES = [
  {id: 1, uri: ''},
  {id: 2, uri: ''},
  {id: 3, uri: ''},
  {id: 4, uri: ''},
  {id: 5, uri: ''},
  {id: 6, uri: ''},
];
export const IMAGE_OPTION = {
  mediaType: 'photo',
  includeBase64: false,
  quality: 0.8,
};
export const VIDEO_OPTION = {
  mediaType: 'video',
  includeBase64: false,
  quality: 0.8,
};
export const IMAGE_OPTION_FORNT = {
  mediaType: 'photo',
  includeBase64: false,
  quality: 0.7,
  cameraType: 'front',
};
export const alertDefault = {
  msg: '',
  show: false,
  whichClick: 0,
  btnTxt: '',
};

//PLACE-HOLDER


/// WRANING
