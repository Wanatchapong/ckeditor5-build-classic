/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Alignment,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Code,
	Subscript,
	Superscript,
	BlockQuote,
	CKFinder,
	EasyImage,
	Font,
	Heading,
	Highlight,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'code',
			'subscript',
			'superscript',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'|',
			'alignment',
			'|',
			'horizontalLine',
			'highlight',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
		],
	},
	alignment: {
		options: [ 'left', 'right', 'center', 'justify' ],
	},
	fontColor: {
		colors: [
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black',
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey',
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey',
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey',
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true,
			},
		],
	},
	fontBackgroundColor: {
		colors: [
			{
				color: 'hsl(0, 75%, 60%)',
				label: 'Red',
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Orange',
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Yellow',
			},
			{
				color: 'hsl(90, 75%, 60%)',
				label: 'Light green',
			},
			{
				color: 'hsl(120, 75%, 60%)',
				label: 'Green',
			},
		],
	},
	fontSize: {
		options: [ 8, 10, 12, 'default', 16, 18, 20, 24, 28, 32, 36, 40, 46 ],
	},
	highlight: {
		options: [
			{
				model: 'greenMarker',
				class: 'marker-green',
				title: 'Green marker',
				color: 'rgb(25, 156, 25)',
				type: 'marker',
			},
			{
				model: 'yellowMarker',
				class: 'marker-yellow',
				title: 'Yellow marker',
				color: '#cac407',
				type: 'marker',
			},
			{
				model: 'redPen',
				class: 'pen-red',
				title: 'Red pen',
				color: 'hsl(343, 82%, 58%)',
				type: 'pen',
			},
		],
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'imageStyle:alignLeft',
			'imageStyle:alignCenter',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative',
		],
		styles: [ 'full', 'side', 'alignLeft', 'alignCenter', 'alignRight' ],
		resizeUnit: 'px',
	},
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
};
