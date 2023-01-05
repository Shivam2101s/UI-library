import React from 'react';
import Tick from '../Tick';
import ChevronDown from '../ChevronDown';
import ChevronLeft from '../ChevronLeft';
import ChevronRight from '../ChevronRight';
import ChevronTop from '../ChevronTop';
import Filter from '../Filter';
import Rupee from '../Rupee';
import Send from '../Send';
import Hamburger from '../Hamburger';
import Search from '../Search';
import Cross from '../Cross';
import CloseCircle from '../CloseCircle';
import copy from 'copy-to-clipboard';
import InfoCircle from '../InfoCircle';
import s from './All.module.scss';
import Heart from '../Heart';
import Add from '../Add';
import ArchiveTick from '../ArchiveTick';
import ArchivePlus from '../ArchivePlus';
import Message from '../Message';
import Share from '../Share';
import Export from '../Export';
import Car from '../Car';
import Edit from '../Edit';
import ArrowLeft from '../ArrowLeft';
import Camera from '../Camera';
import Chart from '../Chart';
import Home2 from '../Home2';
import Profile from '../Profile';
import Sms from '../Sms';
import Trash from '../Trash';
import VideoCircle from '../VideoCircle';

function Index() {
  return (
    <div className={s.root}>
      <div className={s.item}>
        <div className={s.header}>Filter</div>
        <div className={s.variant}>
          <Filter variant="linear" />
          <div>
            <code>{'<Filter variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Filter variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Filter variant="bulk" />
          <div>
            <code>{'<Filter variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Filter variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Filter variant="twoTone" />
          <div>
            <code>{'<Filter variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Filter variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Cross</div>
        <div className={s.variant}>
          <Cross variant="linear" />
          <div>
            <code>{'<Cross variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Cross variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Cross variant="bulk" />
          <div>
            <code>{'<Cross variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Cross variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Cross variant="twoTone" />
          <div>
            <code>{'<Cross variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Cross variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Cross</div>
        <div className={s.variant}>
          <Search variant="linear" />
          <div>
            <code>{'<Search variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Search variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Search variant="bulk" />
          <div>
            <code>{'<Search variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Search variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Search variant="twoTone" />
          <div>
            <code>{'<Search variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Search variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Tick</div>
        <div className={s.variant}>
          <Tick variant="linear" />
          <div>
            <code>{'<Tick variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Filter variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Tick variant="bulk" />
          <div>
            <code>{'<Tick variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Filter variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Rupee</div>
        <div className={s.variant}>
          <Rupee variant="linear" />
          <div>
            <code>{'<Rupee variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Rupee variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Hamburger</div>
        <div className={s.variant}>
          <Hamburger variant="linear" />
          <div>
            <code>{'<Hamburger variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Hamburger variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Chevron</div>
        <div className={s.variant}>
          <ChevronDown />
          <div>
            <code>{'<ChevronDown />'}</code>
            <button type="button" onClick={() => copy(`<ChevronDown />`)}>
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <ChevronTop />
          <div>
            <code>{'<ChevronTop />'}</code>
            <button type="button" onClick={() => copy(`<ChevronTop />`)}>
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <ChevronLeft />
          <div>
            <code>{'<ChevronLeft />'}</code>
            <button type="button" onClick={() => copy(`<ChevronLeft />`)}>
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <ChevronRight />
          <div>
            <code>{'<ChevronRight />'}</code>
            <button type="button" onClick={() => copy(`<ChevronRight />`)}>
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.header}>Info Circle</div>
        <div className={s.variant}>
          <InfoCircle variant="linear" />
          <div>
            <code>{'<InfoCircle variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<InfoCircle variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <InfoCircle variant="bulk" />
          <div>
            <code>{'<InfoCircle variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<InfoCircle variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <InfoCircle variant="twoTone" />
          <div>
            <code>{'<InfoCircle variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<InfoCircle variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.header}>Export</div>
        <div className={s.variant}>
          <Export variant="linear" />
          <div>
            <code>{'<Export variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Export variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Export variant="bulk" />
          <div>
            <code>{'<Export variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Export variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Export variant="twoTone" />
          <div>
            <code>{'<Export variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Export variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.header}>Car</div>
        <div className={s.variant}>
          <Car variant="linear" />
          <div>
            <code>{'<Car variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Car variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Car variant="bulk" />
          <div>
            <code>{'<Car variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Car variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Car variant="twoTone" />
          <div>
            <code>{'<Car variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Car variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.header}>Edit</div>
        <div className={s.variant}>
          <Edit variant="linear" />
          <div>
            <code>{'<Edit variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Edit variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Edit variant="bulk" />
          <div>
            <code>{'<Edit variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Edit variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Edit variant="twoTone" />
          <div>
            <code>{'<Edit variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Edit variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Send</div>
        <div className={s.variant}>
          <Send variant="linear" />
          <div>
            <code>{'<Send variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Send variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Send variant="bulk" />
          <div>
            <code>{'<Send variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Send variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Send variant="twoTone" />
          <div>
            <code>{'<Send variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Send variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.header}>Close circle</div>
        <div className={s.variant}>
          <CloseCircle variant="linear" />
          <div>
            <code>{'<CloseCircle variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<CloseCircle variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <CloseCircle variant="bulk" />
          <div>
            <code>{'<CloseCircle variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<CloseCircle variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <CloseCircle variant="twoTone" />
          <div>
            <code>{'<CloseCircle variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<CloseCircle variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.header}>Heart</div>
        <div className={s.variant}>
          <Heart variant="linear" />
          <div>
            <code>{'<Heart variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Heart variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Heart variant="bulk" />
          <div>
            <code>{'<Heart variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Heart variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Heart variant="twoTone" />
          <div>
            <code>{'<Heart variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Heart variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.header}>Add</div>
        <div className={s.variant}>
          <Add variant="linear" />
          <div>
            <code>{'<Add variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Add variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Add variant="bulk" />
          <div>
            <code>{'<Add variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Add variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Add variant="twoTone" />
          <div>
            <code>{'<Add variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Add variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.header}>Archive Tick</div>
        <div className={s.variant}>
          <ArchiveTick variant="linear" />
          <div>
            <code>{'<ArchiveTick variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<ArchiveTick variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <ArchiveTick variant="bulk" />
          <div>
            <code>{'<ArchiveTick variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<ArchiveTick variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <ArchiveTick variant="twoTone" />
          <div>
            <code>{'<ArchiveTick variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<ArchiveTick variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.header}>Archive Plus</div>
        <div className={s.variant}>
          <ArchivePlus variant="linear" />
          <div>
            <code>{'<ArchivePlus variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<ArchivePlus variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <ArchivePlus variant="bulk" />
          <div>
            <code>{'<ArchivePlus variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<ArchivePlus variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <ArchivePlus variant="twoTone" />
          <div>
            <code>{'<ArchivePlus variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<ArchivePlus variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.header}>Message</div>
        <div className={s.variant}>
          <Message variant="linear" />
          <div>
            <code>{'<Message variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Message variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Message variant="bulk" />
          <div>
            <code>{'<Message variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Message variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Message variant="twoTone" />
          <div>
            <code>{'<Message variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Message variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.header}>Share</div>
        <div className={s.variant}>
          <Share variant="linear" />
          <div>
            <code>{'<Share variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Share variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Share variant="bulk" />
          <div>
            <code>{'<Share variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Share variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Arrow Left</div>
        <div className={s.variant}>
          <ArrowLeft variant="linear" />
          <div>
            <code>{'<ArrowLeft variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<ArrowLeft variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <ArrowLeft variant="bulk" />
          <div>
            <code>{'<ArrowLeft variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<ArrowLeft variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <ArrowLeft variant="twoTone" />
          <div>
            <code>{'<ArrowLeft variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<ArrowLeft variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Camera</div>
        <div className={s.variant}>
          <Camera variant="linear" />
          <div>
            <code>{'<Camera variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Camera variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Camera variant="bulk" />
          <div>
            <code>{'<Camera variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Camera variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Camera variant="twoTone" />
          <div>
            <code>{'<Camera variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Camera variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Chart</div>
        <div className={s.variant}>
          <Chart variant="linear" />
          <div>
            <code>{'<Chart variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Chart variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Chart variant="bulk" />
          <div>
            <code>{'<Chart variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Chart variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Chart variant="twoTone" />
          <div>
            <code>{'<Chart variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Chart variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Home2</div>
        <div className={s.variant}>
          <Home2 variant="linear" />
          <div>
            <code>{'<Home2 variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Home2 variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Home2 variant="bulk" />
          <div>
            <code>{'<Home2 variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Home2 variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Home2 variant="twoTone" />
          <div>
            <code>{'<Home2 variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Home2 variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Profile</div>
        <div className={s.variant}>
          <Profile variant="linear" />
          <div>
            <code>{'<Profile variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Profile variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Profile variant="bulk" />
          <div>
            <code>{'<Profile variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Profile variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Profile variant="twoTone" />
          <div>
            <code>{'<Profile variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Profile variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Sms</div>
        <div className={s.variant}>
          <Sms variant="linear" />
          <div>
            <code>{'<Sms variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Sms variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Sms variant="bulk" />
          <div>
            <code>{'<Sms variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Sms variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Sms variant="twoTone" />
          <div>
            <code>{'<Sms variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Sms variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Trash</div>
        <div className={s.variant}>
          <Trash variant="linear" />
          <div>
            <code>{'<Trash variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Trash variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Trash variant="bulk" />
          <div>
            <code>{'<Trash variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Trash variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <Trash variant="twoTone" />
          <div>
            <code>{'<Trash variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<Trash variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.header}>Video-Circle</div>
        <div className={s.variant}>
          <VideoCircle variant="linear" />
          <div>
            <code>{'<VideoCircle variant="linear" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<VideoCircle variant="linear" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <VideoCircle variant="bulk" />
          <div>
            <code>{'<VideoCircle variant="bulk" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<VideoCircle variant="bulk" />`)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className={s.variant}>
          <VideoCircle variant="twoTone" />
          <div>
            <code>{'<VideoCircle variant="twoTone" />'}</code>
            <button
              type="button"
              onClick={() => copy(`<VideoCircle variant="twoTone" />`)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
