import { Component } from 'react';

import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };


  render() {
    const { isModalOpen } = this.state;
    const { image } = this.props;

    return (
      <li className={css.item}>
        <img
          className={css.image}
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.toggleModal}
        />
        {isModalOpen && (
          <Modal
            largeImageURL={image.largeImageURL}
            onClose={this.toggleModal}
          />
        )}
      </li>
    );
  }
}