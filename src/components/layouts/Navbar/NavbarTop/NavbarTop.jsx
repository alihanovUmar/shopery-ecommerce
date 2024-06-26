import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { translationKeys } from '../../../../utils/translation/translationKeys';
import { useEffect, useState } from 'react';
import { getUser } from '../../../../utils/utils';

const NavbarTop = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    getUser().then(user => {
      if (user && user.token) {
        setLogged(true);
      } else {
        setLogged(false);
      }
    });
  }, []);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <div className="bg-gray-800 py-2 md:p-3 text-gray-300 text-xs font-normal">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1320px] mx-auto px-4">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <a href="#1" className="cursor-pointer hover:text-primary flex items-center gap-2 transition-all">
            <CiLocationOn size={24} />
            <p>{t(translationKeys['Store Location'])}</p>
          </a>
        </div>
        <div className="flex items-center gap-5">
          <Select onValueChange={(e) => changeLanguage(e)}>
            <SelectTrigger className="focus:ring-offset-0 h-full rounded-none placeholder:text-muted-foreground focus:outline-none focus:ring-0 disabled:opacity-100 w-max p-0 text-gray-300 font-normal bg-gray-800 text-xs hover:text-primary outline-none border-input border-none gap-[6px] flex items-center justify-center">
              <SelectValue placeholder="Eng" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en" className="cursor-pointer text-gray-300 font-normal text-xs">
                Eng
              </SelectItem>
              <SelectItem value="ru" className="cursor-pointer text-gray-300 font-normal text-xs">
                Рус
              </SelectItem>
              <SelectItem value="uz" className="cursor-pointer text-gray-300 font-normal text-xs">
                Uzb
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="w-[1px] h-[15px] bg-gray-100"></div>
          <div className="flex items-center gap-1">
            {!logged ? (
              <>
                <Link to="/sign-in" className="hover:text-primary">
                  {t(translationKeys['Sign In'])}
                </Link>
                <p>/</p>
                <Link to="/sign-up" className="hover:text-primary">
                  {t(translationKeys['Sign Up'])}
                </Link>
              </>
            ) : (
              <Link to="/dashboard" className="hover:text-primary">
                Profile
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
