import useNav from '../../hooks/useNav';
import MenuMobile from './MenuMobile';
import texts from '../../utils/texts.json';
import { BsXLg } from 'react-icons/bs';
import useMediaQuery from '../../hooks/useMediaQuery';
import acelerate_logo from '../../../public/acelerate_logo.png';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import '../../css/font.css';

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();
  const isSmallScreen = useMediaQuery('(max-width: 640px)'); // Suponiendo 640px como el breakpoint para móviles

  return (
    <header
      className={`
        fixed z-[98] top-0 left-0 w-full 
        px-10 flex justify-center gap-10 items-center  
        h-[90px]  text-white 
      `}
      style={{
        backgroundColor: '#09090B',
        justifyContent: isSmallScreen && 'start',
        paddingInline: isSmallScreen && '0px',
      }}
    >
      <div
        className='font-bold   pt-2'
        style={{ color: '#FFFFFF', fontSize: '25px', height: 'fit-content' }}
      >
        <img
          src='https://res.cloudinary.com/db60chvpz/image/upload/v1717141705/xmmqv1s6b0uuozbwyr5o.png'
          alt='logo'
          className='h-[50px]'
        />
      </div>

      {/* Renderizar elementos del menú solo si la vista no es móvil */}
      {!isSmallScreen && (
        <>
          <div>
            <a
              href={texts['section-one'].link1}
              className=''
              style={{ color: '#A1A1AA' }}
            >
              {texts['section-one'].item1}
            </a>
          </div>
          <div>
            <a
              href={texts['section-one'].link2}
              className=''
              style={{ color: '#A1A1AA' }}
            >
              {texts['section-one'].item2}
            </a>
          </div>
          <div>
            <a
              href={texts['section-one'].link3}
              className=''
              style={{ color: '#A1A1AA' }}
            >
              {texts['section-one'].item3}
            </a>
          </div>
          <div>
            <a
              href={texts['section-one'].bloglink}
              target='_blank'
              rel='noopener noreferrer'
              className=''
              style={{ color: '#A1A1AA' }}
            >
              Blog
            </a>
          </div>
        </>
      )}

      <a
        href={texts['contacto-url']}
        target='_blank'
        style={{
          border: '1px groove #3F3F46',
          borderRadius: '4px',
          padding: '12px 24px 12px 24px',
          backgroundColor: '#27272A',
          color: '#FFFFFF',
          fontFamily: 'Space',
        }}
        className='btn-sm text-gray-200  hover:bg-gray-800 ml-auto'
      >
        <span>{texts['section-one'].button}</span>
      </a>

      {/* Renderizar botón de menú móvil */}
      <button
        className='text-2xl cursor-pointer z-[90] text-secondary flex items-center justify-between md:hidden ml-auto'
        onClick={handleIsOpen}
      >
        {isOpen ? (
          <BsXLg color='white' />
        ) : (
          <HiOutlineMenuAlt3 color='white' size={40} />
        )}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};
export default Navbar;
