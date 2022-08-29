import React from 'react';
import './ContactUs.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import Floor from '../../assets/images/workspace/floor.png';
import SofaChair from '../../assets/images/workspace/sofa-chair.png';
import SofaChairShadow from '../../assets/images/workspace/sofa-chair-shadow.png';
import Desk from '../../assets/images/workspace/computer-desk.png';
import DeskShadow from '../../assets/images/workspace/computer-desk-shadow.png';
import Monitor from '../../assets/images/workspace/monitor.png';
import ColorMonitor from '../../assets/images/workspace/color-monitor.png';
import Monitor2 from '../../assets/images/workspace/monitor2.png';
import MousePad from '../../assets/images/workspace/mousepad.png';
import MousePad2 from '../../assets/images/workspace/mousepad2.png';
import Notebook from '../../assets/images/workspace/notebook.png';
import KeyboardBlue from '../../assets/images/workspace/keyboard-blue.png';
import Mouse from '../../assets/images/workspace/mouse.png';
import PhoneStand from '../../assets/images/workspace/phone-stand.png';
import KeyboardPurple from '../../assets/images/workspace/keyboard-purple.png';
import MouseWhite from '../../assets/images/workspace/mouse-white.png';
import SystemUnit from '../../assets/images/workspace/system-unit.png';
import SystemUnitShadow from '../../assets/images/workspace/system-unit-shadow.png';
import SystemUnit2 from '../../assets/images/workspace/system-unit-2.png';
import ChairCarpet from '../../assets/images/workspace/chair-carpet.png';
import ComputerChair from '../../assets/images/workspace/computer-chair.png';
import ComputerChairShadow from '../../assets/images/workspace/computer-chair-shadow.png';
import LightingStand from '../../assets/images/workspace/lighting-stand.png';
import LightingShadow from '../../assets/images/workspace/lighting-shadow.png';
import LightRingStand from '../../assets/images/workspace/lightring-stand.png';
import LightRingStandShadow from '../../assets/images/workspace/lightring-shadow.png';
import Table from '../../assets/images/workspace/table.png';
import TableShadow from '../../assets/images/workspace/table-shadow.png';
import Tree from '../../assets/images/workspace/tree.png';
import TreeShadow from '../../assets/images/workspace/tree-shadow.png';

const Item = ({ item, position, className, startY, endY, startOpacity, endOpacity, zIndex }) => {
    const offset = 1000;
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [position, offset + position], [startY || -2000, endY || 0]);
    const opacity = useTransform(scrollY, [position, offset + position], [startOpacity || -20, endOpacity || 1]);

    return (
        <motion.img src={item}
            className={ className ||'item' }
            style={{
                position: 'absolute',
                y: y,
                opacity: opacity,
                zIndex: zIndex || 10
            }}
            width={'100%'}
            height={'auto'}
        />
    )
}

const ContactUs = () => {
    const { scrollY } = useScroll();
    const offset = 1000, startPosition = 8200;

    const systemUnitPosition = startPosition + 150;
    const systemUnitY = useTransform(scrollY, [systemUnitPosition, offset + systemUnitPosition], [-500, 0]);
    const systemUnitX = useTransform(scrollY, [systemUnitPosition, offset + systemUnitPosition], [500, 0]);
    const systemUnitOpacity = useTransform(scrollY, [systemUnitPosition, offset + systemUnitPosition], [-20, 1]);

    const basePosition = startPosition - 20;
    const baseY = useTransform(scrollY, [basePosition, offset + basePosition], [0, 10]);
    const baseOpacity = useTransform(scrollY, [basePosition, offset + basePosition], [-10, 1]);

    return (
        <div id='Contact-Us' >
            <div className='cu-text1'>What are you waiting for?</div>
            <div className='cu-text2'>Let's GET LOST together!</div>
            <a className='cu-text3' href='mailto:business@overkill.sg'>business@overskill.sg</a>
            <div className='workspace'>
                <motion.img src={Floor}
                    style={{
                        y: baseY,
                        opacity: baseOpacity
                    }}
                    width={'100%'}
                    height={'auto'}/>

                <Item item={Desk} position={startPosition} />
                <Item item={DeskShadow} position={startPosition} zIndex={8} startOpacity={-40} endOpacity={0.3} className='desk-shadow' />
                <Item item={Monitor} position={startPosition+10} />
                <Item item={ColorMonitor} position={startPosition+20} />
                <Item item={Monitor2} position={startPosition+40} />
                <Item item={MousePad} position={startPosition+50} />
                <Item item={MousePad2} position={startPosition + 65} />
                <Item item={Notebook} position={startPosition + 70} />
                <Item item={KeyboardBlue} position={startPosition + 80} />
                <Item item={Mouse} position={startPosition + 90} />
                <Item item={PhoneStand} position={startPosition + 95} />
                <Item item={KeyboardPurple} position={startPosition + 100} />
                <Item item={MouseWhite} position={startPosition + 105} />
                <motion.img src={SystemUnit}
                    className={'item'}
                    style={{
                        position: 'absolute',
                        zIndex: 9,
                        x: systemUnitX,
                        y: systemUnitY,
                        opacity: systemUnitOpacity
                    }}
                    width={'100%'}
                    height={'auto'} 
                />
                <Item item={SystemUnitShadow} position={systemUnitPosition} startOpacity={-40} endOpacity={0.3} zIndex={7} className={'system-unit-shadow'}/>
                <motion.img src={SystemUnit2}
                    className={'item'}
                    style={{
                        position: 'absolute',
                        zIndex: 9,
                        x: systemUnitX,
                        y: systemUnitY,
                        opacity: systemUnitOpacity
                    }}
                    width={'100%'}
                    height={'auto'} 
                />
                <Item item={ChairCarpet} position={startPosition + 160} startOpacity={-15} className='chair-carpet' />
                <Item item={ComputerChair} position={startPosition + 170} />
                <Item item={ComputerChairShadow} position={startPosition + 170} startOpacity={-40} endOpacity={0.2}/>
                <Item item={LightingStand} position={startPosition + 280} startY={-3000} />
                <Item item={LightingShadow} position={startPosition + 280} endOpacity={0.3}/>
                <Item item={LightRingStand} position={startPosition + 270}/>
                <Item item={LightRingStandShadow} position={startPosition + 270} endOpacity={0.3}/>
                <Item item={Table} position={startPosition + 190} className={'table'}/>
                <Item item={TableShadow} position={startPosition + 190} endOpacity={0.3} zIndex={7}/>
                <Item item={Tree} position={startPosition + 190} startOpacity={-15}/>
                <Item item={TreeShadow} position={startPosition + 190} endOpacity={0.2}/>
                <Item item={SofaChair} position={startPosition + 170} />
                <Item item={SofaChairShadow} position={startPosition + 170} endOpacity={0.3} zIndex={7}/>
            </div>
        </div>
    )
}

export default ContactUs;
