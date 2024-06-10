import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HeroCard from './HeroCard';
import { useRouter } from 'next/navigation';
import { useHeroFinderContext } from '@/contexts/HeroFinderContext/HeroFinderContextProvider';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/contexts/HeroFinderContext/HeroFinderContextProvider', () => ({
  useHeroFinderContext: jest.fn(),
}));

describe('<HeroCard /> test', () => {
  const heroData = {
    id: 1234,
    name: 'Spider-man',
    description: 'Spider-man description',
    modified: '',
    thumbnail: { extension: 'jpg', path: '' },
    resourceURI: '',
    urls: [],
    comics: {
      available: 1234,
      collectionURI: '',
      items: [],
      returned: 1234,
    },
    stories: {
      available: 1234,
      collectionURI: '',
      items: [],
      returned: 1234,
    },
    events: {
      available: 1234,
      collectionURI: '',
      items: [],
      returned: 1234,
    },
    series: {
      name: '',
      resourceURI: '',
      available: 1234,
      collectionURI: '',
      items: [],
      returned: 1234,
    },
  };

  const setHeroDataDetailMock = jest.fn();
  const pushMock = jest.fn();

  beforeEach(() => {
    (useHeroFinderContext as jest.Mock).mockReturnValue({
      favsHeros: [],
      addHeroToFavList: jest.fn(),
      removeHeroFromFavList: jest.fn(),
      setHeroDataDetail: setHeroDataDetailMock,
    });

    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('HeroCard is displayed', () => {
    render(<HeroCard heroData={heroData} />);

    const heroContainer = screen.getByTestId('hero-card-container');
    const heroName = screen.getByTestId('hero-card-name');

    expect(heroContainer).toBeInTheDocument();
    expect(heroName).toHaveTextContent(heroData.name);
  });

  test('HeroCard click event goes to new page', () => {
    render(<HeroCard heroData={heroData} />);
    const heroContainer = screen.getByTestId('hero-card-container');

    fireEvent.click(heroContainer);

    expect(setHeroDataDetailMock).toHaveBeenCalledWith(heroData);
    expect(pushMock).toHaveBeenCalledWith(`/${heroData.id}`);
  });
});
