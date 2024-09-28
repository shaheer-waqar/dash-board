import { LiaTachometerAltSolid,} from "react-icons/lia";
import { TbCategoryFilled,TbVip } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { AiFillTool } from "react-icons/ai";
import { HiMiniUserGroup,HiMiniCube } from "react-icons/hi2";
import { LuUserCog } from "react-icons/lu";
import { FaUserGroup,FaUsersLine} from "react-icons/fa6";
import { GiRobotHelmet,GiStairs,GiUpCard } from "react-icons/gi";
import { RiMessage2Fill } from "react-icons/ri";
import { BsListTask ,BsBookmarkHeartFill} from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { CgMusicNote } from "react-icons/cg";
import { GrTools } from "react-icons/gr";
import { ImMagicWand } from "react-icons/im";
import { GiCartwheel ,GiSpadeSkull} from "react-icons/gi";

















export const sideBarData = [
  {
    label: "Home",
    path: "/console/dashborad",
    icons: <LiaTachometerAltSolid />,
  },
  {
    label: "System Management",
    icons: <TbCategoryFilled />,
    subItems: [
      {
        label: "System Setting",
        icons:<IoMdSettings/>,
        subItems: [
          { label: "Advertising Configuration", path: "/systemMange/systemConfig/adminConfig" },
          { label: "Exchange Rules", path: "/systemMange/systemConfig/exchangeRule" },
          { label: "Purchase Rules List", path: "/systemMange/systemConfig/purchaseRuleList" },
        ],
      },
      {
        label: "Mobile Platform Settings",
        icons:<AiFillTool/>,
        subItems: [
          { label: "Mobile Configuration", path: "/systemMange/systemMobileConfig/MConfig" },
          { label: "Nickname Restriction Configuration", path: "/systemMange/systemMobileConfig/nickNameConfig" },
          { label: "Encryption Key Configuration", path: "/systemMange/systemMobileConfig/keyConfig" },
        ],
      },
      {
        label: "Administrator Management",
        path: "/systemMange/administratorManagement",
        icons:<HiMiniUserGroup/>,

      },
      {
        label: "Role Management",
        path: "/systemMange/roleManagement",
        icons:<LuUserCog/>,

      },
      {
        label: "Deleted System Operation Logs",
        path: "/systemMange/deletedSystemLogs",
        icons:<FaRegCreditCard/>,
      },
    ],
  },
  
  {
    label: "User Management",
    icons: <FaUserGroup />,
    subItems: [
      {
        label: "USer Management",
        icons:<GiRobotHelmet/>,
        subItems: [
          { label: "USer Management", path: "/systemUser/systemUserGeneral/userManagement" },
          { label: "Robot Avatar", path: "/systemUser/systemUserGeneral/robotAvatar" },
          { label: "Private messege gift statistics", path: "/systemUser/systemUserGeneral/messgageStistics" },
          { label: "Anchor Tags", path: "/systemUser/systemUserGeneral/anchorTags" },
          { label: "Income expenditures record", path: "/systemUser/systemUserGeneral/expendituresRecord" },
          { label: "Revenue record", path: "/systemUser/systemUserGeneral/revenueRecord" },
        ],
      },
      {
        label: "system Message Management",
        path: "/systemUser/systemMessageManagement",
        icons:<RiMessage2Fill/>,

      },
      {
        label: "Crtification Management",
        icons:<FaUsersLine/>,
        subItems: [
          { label: "Anchor certification list", path: "/systemUser/systemAuth/anchortCertificationList" },
          { label: "Vertical Name List", path: "/systemUser/systemAuth/verticalNameList" },
        ],
      },
      {
        label: "Level Management",
        path: "/levelManagement",
        icons:<GiStairs/>,

      },
      {
        label: "Task Management",
        path: "/taskManagement",
        icons:<BsListTask/>,

      },
      {
        label: "Family Management",
        icons:<MdFamilyRestroom/>,
        subItems: [
          { label: "Family list", path: "/familyList" },
          { label: "Family Review", path: "/familyReview" },
          { label: "Family Level List", path: "/familyLevelList" },
        ],
      },
      {
        label: "Invitation Management",
        path: "/invitationManagement",
        icons:<GiUpCard/>,
      },
    ],
  },

  {
    label: "Live Management",
    icons: <IoVideocamOutline />,
    subItems: [
      {
        label: "PK Time Rule Setting",
        path: "/pkTimeZoneSetting",
        icons:"p",

      },
      {
        label: "Live Room Sounds Effects",
        path:"/liveRoomSoundEffect",
        icons:<CgMusicNote/>,

      },
      {
        label: "Category Management",
        path: "/categoryManagement",
        icons:<HiMiniCube/>,

      },
      {
        label: "Live Management",
        icons:<IoVideocamOutline/>,
        subItems: [
          { label: "live room list", path: "/liveroomList" },
          { label: "Voice room", path: "/voiceRoom" },
          { label: "Montitoring", path: "/montitoring" },
          { label: "Warning Content List", path: "/warningContentList" },
          { label: "Live Ending Video", path: "/liveEndingList" },
          { label: "Replay List", path: "/replayList" },
          { label: "Push Messgae List", path: "/pushMesaageList" },
          { label: "Pk Records", path: "/pkRecords" },
          { label: "Room Background Cover", path: "/roomBackgrounCover" },
          { label: "Red envelope list", path: "/redEnvelopeList" },
        ],
      },
      {
        label: "Music Management",
        path: "/musicMAnangement",
        icons:<HiMiniCube/>,
      },
    ],
  },

  {
    label: "Prperty Master",
    icons: <GrTools />,
    subItems: [
      {
        label: "Gift Management",
        icons:<ImMagicWand/>,
        subItems: [
          { label: "Gift list", path: "/giftList" },
          { label: "Lucky Gift List", path: "/luckyGiftList" },
        ],
      },
      {
        label: "Vehicle Management",
        icons:<GiCartwheel/>,
        subItems: [
          { label: "Vehicle list", path: "/vehicleList" },
          { label: "Price Configuration", path: "/priceConfiguration" },
          { label: "Purchase Record", path: "/purchaseRecord" },
          { label: "Gift Record", path: "/giftRecord" },
        ],
      },
      {
        label: "Guradian Management",
        icons:<BsBookmarkHeartFill/>,
        subItems: [
          { label: "Guradian Category", path: "/guradianCategory" },
          { label: "purchase price Configuration", path: "/purchasePriceConfiguration" },
          { label: "Privlage List", path: "/previlageList" },
          { label: "Guradian Record", path: "/guradianRecord" },
        ],
      },
      {
        label: "Fancy Number Managemnt",
        icons:<GiSpadeSkull/>,
        subItems: [
          { label: "Fancy Number Managemnt", path: "/fancyNumberManagement" },
          { label: "Beautiful Number Consumtion", path: "/beatufulConsumtion" },
        ],
      },
    ],
  },

];
