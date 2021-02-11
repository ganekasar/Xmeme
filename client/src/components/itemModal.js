import React, { Component, useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {

    state = {
        modal: false,
        name: '',
        link: '',
        caption: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name,
            link: this.state.link,
            caption: this.state.caption
        }

        // Add Item via addItem action
        this.props.addItem(newItem);

        // Close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    className="add-btn"
                    onClick={this.toggle}
                >Add Item</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add Your Meme</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name.."
                                    onChange={this.onChange}
                                ></Input>
                            </FormGroup>  
                            <FormGroup>    
                                <Label for="link">Link</Label>
                                <Input
                                    type="text"
                                    name="link"
                                    id="link"
                                    placeholder="Paste Link Here.."
                                    onChange={this.onChange}
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="caption">Caption</Label>
                                <Input
                                    type="textarea"
                                    name="caption"
                                    id="caption"
                                    placeholder="Add Caption.."
                                    onChange={this.onChange}
                                ></Input>
                            </FormGroup>
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add Item</Button>
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );

    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);